import ws from 'ws';
import moment from 'moment';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import gradient from 'gradient-string';
import seeCommands from './lib/system/commandLoader.js';
import initDB from './lib/system/initDB.js';
import antilink from './commands/antilink.js';
import level from './commands/level.js';
import { getGroupAdmins } from './lib/message.js';

seeCommands()

export default async (client, m) => {
  if (global.comandos.size === 0) {
    console.log('Cargando comandos por primera vez...');
    await seeCommands();
  }
  
  if (!m.message) return
  
  const sender = m.sender 
  let body = m.message.conversation || m.message.extendedTextMessage?.text || m.message.imageMessage?.caption || m.message.videoMessage?.caption || m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply?.selectedRowId || m.message.templateButtonReplyMessage?.selectedId || ''
  
  initDB(m, client)
  antilink(client, m)
  
  for (const name in global.plugins) {
    const plugin = global.plugins[name]
    if (plugin && typeof plugin.all === "function") {
      try {
        await plugin.all.call(client, m, { client })
      } catch (err) {
        console.error(`Error en plugin.all -> ${name}`, err)
      }
    }
  }
  
  const from = m.key.remoteJid
  const botJid = client.user.id.split(':')[0] + '@s.whatsapp.net' || client.user.lid
  const chat = global.db.data.chats[m.chat] || {}
  const settings = global.db.data.settings[botJid] || {}  
  const user = global.db.data.users[sender] ||= {}
  const users = chat.users[sender] || {}
  
  const rawBotname = settings.namebot || '𝐌𝐀𝐊𝐈'
  const tipo = settings.type || 'Sub'
  const isValidBotname = /^[\w\s]+$/.test(rawBotname)
  const namebot = isValidBotname ? rawBotname : '𝐌𝐀𝐊𝐈'
  
  const shortForms = [namebot.charAt(0), namebot.split(" ")[0], tipo.split(" ")[0], namebot.split(" ")[0].slice(0, 2), namebot.split(" ")[0].slice(0, 3)]
  const prefixes = shortForms.map(name => `${name}`)
  prefixes.unshift(namebot)
  
  // 🔴 AQUÍ ESTÁ LA FIX - Construir prefixes correctamente
  let prefix
  if (Array.isArray(settings.prefix)) {
    const prefixArray = settings.prefix
    prefix = new RegExp('^(' + prefixes.map(p => p.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&')).join('|') + ')?(' + prefixArray.map(p => p.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&')).join('|') + ')', 'i')
  } else if (typeof settings.prefix === 'string') {
    prefix = new RegExp('^(' + prefixes.map(p => p.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&')).join('|') + ')?(' + settings.prefix.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&') + ')', 'i')
  } else if (settings.prefix === true) {
    prefix = new RegExp('^', 'i')
  } else {
    prefix = new RegExp('^(' + prefixes.map(p => p.replace(/[|\\{}()[\]^$+*.\-\^]/g, '\\$&')).join('|') + ')?', 'i')
  }
  
  // 🟢 AQUÍ ESTÁ LA MAGIA - Extraer el comando
  const match = body.match(prefix)
  
  if (!match) return
  
  const messageWithoutPrefix = body.slice(match[0].length).trim()
  const [command, ...args] = messageWithoutPrefix.split(/\s+/)
  
  if (!command) return
  
  // 🟢 BUSCAR EL COMANDO EN global.comandos
  const cmd = global.comandos.get(command.toLowerCase())
  
  if (!cmd) {
    // Opcional: responder cuando el comando no existe
    // return m.reply(`Comando "${command}" no encontrado. Usa /help para ver los comandos disponibles.`)
    return
  }
  
  // 🟢 EJECUTAR EL COMANDO
  try {
    const context = {
      client,
      m,
      args,
      usedPrefix: match[0],
      command: command.toLowerCase(),
      text: messageWithoutPrefix
    }
    
    // Ejecutar antes (before hook)
    if (cmd.before) {
      await cmd.before.call(client, m, { client })
    }
    
    // Ejecutar el comando
    await cmd.run.call(client, client, m, args, match[0], command.toLowerCase(), messageWithoutPrefix)
    
    // Ejecutar después (after hook)
    if (cmd.after) {
      await cmd.after.call(client, m, { client })
    }
    
    // Incrementar contador de comandos usados
    user.usedcommands = (user.usedcommands || 0) + 1
    
  } catch (err) {
    console.error(`❌ Error ejecutando comando ${command}:`, err)
    m.reply(`❌ Error al ejecutar el comando: ${err.message}`)
  }
  
  // Ejecutar level
  await level(m)
}