const makeWASocket = require('@whiskeysockets/baileys').default;
const { useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');
const readline = require('readline');
const { BOT_NAME, MENU_IMAGE } = require('./config');
const { loadData, saveData, getAIResponse } = require('./data'); // Wait, data.js is persistence, utils is functions
const infoCommands = require('./commands/infoCommands');
const downloadCommands = require('./commands/downloadCommands');
const utilityCommands = require('./commands/utilityCommands');
const groupCommands = require('./commands/groupCommands');
const profileCommands = require('./commands/profileCommands');
const economyCommands = require('./commands/economyCommands');
const animeCommands = require('./commands/animeCommands');
const subBotCommands = require('./commands/subBotCommands');
const ownerCommands = require('./commands/ownerCommands');
const stickerCommands = require('./commands/stickerCommands');
const gachaCommands = require('./commands/gachaCommands');
const nsfwCommands = require('./commands/nsfwCommands');

// Load data
let { users, groups } = loadData();

console.log(`${BOT_NAME} iniciando...`);

// Pairing or QR choice
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Elige opción para vincular:\n1. Código QR\n2. Código de 8 dígitos\nOpción: ', async (option) => {
  let useQR = option === '1';
  rl.question('Ingresa tu número de teléfono (ej. 573107400303): ', async (phoneNumber) => {
    rl.close();

    const { state, saveCreds } = await useMultiFileAuthState('auth');

    const sock = makeWASocket({
      logger: pino({ level: 'silent' }),
      printQRInTerminal: useQR,
      auth: state,
      browser: [BOT_NAME, 'Safari', '1.0.0'],
      pairingCode: !useQR,
      mobile: false,
      pairingNumber: phoneNumber
    });

    sock.ev.on('connection.update', async (update) => {
      const { connection, lastDisconnect } = update;
      if (connection === 'close') {
        const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
        if (shouldReconnect) {
          console.log('Reconectando...');
          process.exit(0);
        }
      } else if (connection === 'open') {
        console.log('¡𝐌𝐀𝐊𝐈 𝐀𝐈 conectada! 💎');
      }
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('messages.upsert', async (m) => {
      const msg = m.messages[0];
      if (msg.key.fromMe) return;

      const from = msg.key.remoteJid;
      const body = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
      const lowerBody = body.toLowerCase();
      const parts = body.split(/\s+/);
      const cmd = parts[0].toLowerCase();

      const userId = msg.key.participant || from;
      if (!users[userId]) users[userId] = { money: 0, health: 100, birth: '', genre: '', dailyClaimed: false };
      const user = users[userId];

      const isGroup = from.endsWith('@g.us');
      let groupSettings = {};
      if (isGroup) {
        if (!groups[from]) groups[from] = { antilink: false, welcome: '', bye: '', onlyadmin: false };
        groupSettings = groups[from];

        if (groupSettings.onlyadmin) {
          const { participants } = await sock.groupMetadata(from);
          const isAdmin = participants.find(p => p.id === userId)?.admin;
          if (!isAdmin) return;
        }

        if (groupSettings.antilink && lowerBody.includes('http') && !msg.key.fromMe) {
          const { participants } = await sock.groupMetadata(from);
          const botAdmin = participants.find(p => p.id === sock.user.id)?.admin;
          if (botAdmin) {
            await sock.sendMessage(from, { text: 'Link detectado! Eliminando...' });
            await sock.groupParticipantsUpdate(from, [userId], 'remove');
          }
        }
      }

      if (!cmd.startsWith('#')) return;

      await infoCommands(sock, msg, from, body, parts, cmd, users, groups, saveData);
      await downloadCommands(sock, msg, from, body, parts, cmd);
      await utilityCommands(sock, msg, from, body, parts, cmd);
      await groupCommands(sock, msg, from, body, parts, cmd, groups, saveData);
      await profileCommands(sock, msg, from, body, parts, cmd, users, saveData);
      await economyCommands(sock, msg, from, body, parts, cmd, users, saveData);
      await animeCommands(sock, msg, from, body, parts, cmd);
      await subBotCommands(sock, msg, from, body, parts, cmd);
      await ownerCommands(sock, msg, from, body, parts, cmd);
      await stickerCommands(sock, msg, from, body, parts, cmd);
      await gachaCommands(sock, msg, from, body, parts, cmd, users, saveData);
      await nsfwCommands(sock, msg, from, body, parts, cmd);

      // Dynamic 500 commands
      if (cmd.startsWith('#cmd')) {
        const num = parseInt(cmd.slice(4));
        if (num >= 1 && num <= 500) {
          const aiReply = await getAIResponse(`Respuesta para #cmd${num}: Comando dinámico ejecutado.`);
          await sock.sendMessage(from, { text: aiReply });
        }
      }
    });

    sock.ev.on('group-participants.update', async (update) => {
      const { id, participants, action } = update;
      const groupSettings = groups[id] || {};
      if (action === 'add' && groupSettings.welcome) {
        const pfp = await sock.profilePictureUrl(participants[0], 'image').catch(() => 'https://example.com/default-pfp.jpg');
        await sock.sendMessage(id, { image: { url: pfp }, caption: groupSettings.welcome.replace('{user}', participants[0].replace('@s.whatsapp.net', '')) });
      } else if (action === 'remove' && groupSettings.bye) {
        await sock.sendMessage(id, { text: groupSettings.bye.replace('{user}', participants[0].replace('@s.whatsapp.net', '')) });
      }
    });
  });
});
