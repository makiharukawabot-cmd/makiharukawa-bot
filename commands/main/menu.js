import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';
import moment from 'moment-timezone';
import { bodyMenu, menuObject } from '../../lib/commands.js';

function normalize(text = '') {
  text = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
  return text.endsWith('s') ? text.slice(0, -1) : text;
}

export default {
  command: ['allmenu', 'help', 'menu'],
  category: 'info',
  run: async (client, m, args, usedPrefix, command) => {
    try {
      const now = new Date();
      const colombianTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Caracas' }));
      const tiempo = colombianTime.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/,/g, '');
      const tempo = moment.tz('America/Caracas').format('hh:mm A');
      const botId = client?.user?.id.split(':')[0] + '@s.whatsapp.net';
      const botSettings = global.db.data.settings[botId] || {};
      const botname = botSettings.botname || global.botInfo.displayName || 'MAKI';
      const namebot = botSettings.namebot || global.developerCredit || 'power by 𝓐';
      const banner = botSettings.banner || '';  // Asume que tienes banner en DB o config
      const owner = global.authorizedOwners[0] || 'Oculto por privacidad';  // Toma el primer owner
      const canalId = global.botInfo.channelId || '';
      const canalName = botSettings.nameid || global.botInfo.displayName || 'MAKI Channel';
      const prefix = global.commandPrefix || botSettings.prefix || '#';
      const link = botSettings.link || global.botLinks.waChannel;
      const isOficialBot = botId === global.client.user.id.split(':')[0] + '@s.whatsapp.net';
      const botType = isOficialBot ? 'Principal/Owner' : 'Sub Bot';
      const users = Object.keys(global.db.data.users).length;
      const device = 'Desconocido';  // Removí getDevice ya que no funciona; agrega logic si lo necesitas
      const sender = global.db.data.users[m.sender].name || m.sender.split('@')[0];
      const time = process.uptime() ? formatearMs(Date.now() - (process.uptime() * 1000)) : "Desconocido";  // Fix: process.uptime()
      const alias = {
        anime: ['anime', 'reacciones'],
        downloads: ['downloads', 'descargas'],
        economia: ['economia', 'economy', 'eco'],
        gacha: ['gacha', 'rpg'],
        grupo: ['grupo', 'group'],
        nsfw: ['nsfw', '+18'],
        profile: ['profile', 'perfil'],
        sockets: ['sockets', 'bots'],
        utils: ['utils', 'utilidades', 'herramientas']
      };
      const input = normalize(args[0] || '');
      const cat = Object.keys(alias).find(k => alias[k].map(normalize).includes(input));
      const category = `\( {cat ? ` para \` \){cat}\`` : '. *(˶ᵔ ᵕ ᵔ˶)*'}`
      if (args[0] && !cat) {      
        return m.reply(`《✧》 La categoria *\( {args[0]}* no existe, las categorias disponibles son: * \){Object.keys(alias).join(', ')}*.\n> Para ver la lista completa escribe *\( {usedPrefix}menu*\n> Para ver los comandos de una categoría escribe * \){usedPrefix}menu [categoría]*\n> Ejemplo: *${usedPrefix}menu anime*`);
      }
      const sections = menuObject;
      const content = cat ? String(sections[cat] || '') : Object.values(sections).map(s => String(s || '')).join('\n\n');
      let menu = bodyMenu ? String(bodyMenu || '') + '\n\n' + content : content;
      const replacements = {
        \( owner: (!isNaN(owner.replace(/@s\.whatsapp\.net \)/, '')) ? global.db.data.users[owner]?.name || owner.split('@')[0] : owner),
        $botType: botType,
        $device: device,
        $tiempo: tiempo,
        $tempo: tempo,
        $users: users.toLocaleString(),
        $link: link,
        $cat: category,
        $sender: sender,
        $botname: botname,
        $namebot: namebot,
        $prefix: usedPrefix,
        $uptime: time
      };
      for (const [key, value] of Object.entries(replacements)) {
        menu = menu.replace(new RegExp(`\\${key}`, 'g'), value);
      }
      await client.sendMessage(m.chat, banner.includes('.mp4') || banner.includes('.webm') ? {
        video: { url: banner },
        gifPlayback: true,
        caption: menu,
        contextInfo: {
          mentionedJid: [m.sender],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: canalId,
            serverMessageId: '',
            newsletterName: canalName
          }
        }
      } : {
        text: menu,
        contextInfo: {
          mentionedJid: [m.sender],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: canalId,
            serverMessageId: '',
            newsletterName: canalName
          },
          externalAdReply: {
            title: botname,
            body: `${namebot}, mᥲძᥱ ᥕі𝗍һ ᑲᥡ ⁱᵃᵐ|𝔇ĕ𝐬†𝓻⊙γ𒆜`,
            showAdAttribution: false,
            thumbnailUrl: banner,
            mediaType: 1,
            previewType: 0,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: m });
    } catch (e) {
      console.error('Error en menu:', e);  // Agregado para debug en consola
      await m.reply(`> An unexpected error occurred while executing command *\( {usedPrefix + command}*. Please try again or contact support if the issue persists.\n> [Error: * \){e.message}*]`)
    }
  }
};

function formatearMs(ms) {
  const segundos = Math.floor(ms / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  return [dias && `\( {dias}d`, ` \){horas % 24}h`, `\( {minutos % 60}m`, ` \){segundos % 60}s`].filter(Boolean).join(" ");
}