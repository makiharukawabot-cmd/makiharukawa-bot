const makeWASocket = require('@whiskeysockets/baileys').default;
const { useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');
const readline = require('readline');
const { BOT_NAME } = require('./config');
const { loadData, saveData } = require('./data');

function tryRequire(path) {
  try {
    return require(path);
  } catch (err) {
    console.warn(`Aviso: no se pudo cargar ${path}. Se usará placeholder. (${err.message})`);
    return {}; // placeholder para evitar fallos al arrancar
  }
}

// Cargar módulos de comandos de forma tolerante
const infoCommands = tryRequire('./commands/infoCommands');
const downloadCommands = tryRequire('./commands/downloadCommands');
const utilityCommands = tryRequire('./commands/utilityCommands');
const groupCommands = tryRequire('./commands/groupCommands');
const profileCommands = tryRequire('./commands/profileCommands');
const economyCommands = tryRequire('./commands/economyCommands');
const animeCommands = tryRequire('./commands/animeCommands');
const subBotCommands = tryRequire('./commands/subBotCommands');

// Load data
let { users, groups } = loadData();

console.log(`${BOT_NAME} iniciando...`);

// Pairing or QR choice
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Elige opción para vincular:\n1. Código QR\n2. Código de 8 dígitos\nOpción: ', async (option) => {
  const useQR = option === '1';
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
      if (update.connection === 'close') {
        console.log('Conexión cerrada:', update.lastDisconnect || update);
      } else if (update.connection === 'open') {
        console.log('Conectado correctamente.');
      }
    });

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on('messages.upsert', async (m) => {
      try {
        const msg = m.messages && m.messages[0];
        if (!msg) return;
        if (msg.key?.fromMe) return;

        const from = msg.key.remoteJid;
        const body = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
        const lowerBody = String(body).toLowerCase();
        const parts = String(body).split(/\s+/).filter(Boolean);
        const cmd = parts[0] ? parts[0].toLowerCase() : '';

        const userId = msg.key.participant || from;
        if (!users[userId]) users[userId] = { money: 0, health: 100, birth: '', genre: '', dailyClaimed: false };

        const isGroup = String(from).endsWith('@g.us');
        let groupSettings = {};
        if (isGroup) {
          if (!groups[from]) groups[from] = { antilink: false, welcome: '', bye: '', onlyadmin: false };
          groupSettings = groups[from];

          if (groupSettings.onlyadmin) {
            const metadata = await sock.groupMetadata(from).catch(() => null);
            const participants = metadata?.participants || [];
            const isAdmin = participants.find(p => p.id === userId)?.admin;
            if (!isAdmin) return;
          }

          if (groupSettings.antilink && lowerBody.includes('http') && !msg.key.fromMe) {
            const metadata = await sock.groupMetadata(from).catch(() => null);
            const participants = metadata?.participants || [];
            const botAdmin = participants.find(p => p.id === sock?.user?.id)?.admin;
            if (botAdmin) {
              await sock.sendMessage(from, { text: 'Link detectado! Eliminando...' }).catch(() => null);
            }
          }
        }

        // Ejemplo simple de enrutamiento de comandos (modifica a tu gusto)
        if (cmd === '/ping' || cmd === 'ping') {
          await sock.sendMessage(from, { text: 'Pong' }).catch(() => null);
        } else {
          // Si tus módulos tienen un método run, intenta ejecutarlo
          const args = parts.slice(1);
          const handlers = [infoCommands, downloadCommands, utilityCommands, groupCommands, profileCommands, economyCommands, animeCommands, subBotCommands];
          for (const h of handlers) {
            if (h && typeof h.run === 'function') {
              // Los módulos pueden decidir internamente si procesan el comando
              try { await h.run(sock, msg, args); } catch (e) { /* ignorar errores de handler */ }
            }
          }
        }

      } catch (err) {
        console.error('Error procesando mensaje:', err);
      } finally {
        // Guardar datos (debounce/optimización recomendable)
        try { saveData(users, groups); } catch (e) { console.warn('saveData failed:', e.message); }
      }
    });

    // Guardar al salir con CTRL+C
    process.on('SIGINT', () => {
      console.log('SIGINT recibido — guardando datos y saliendo...');
      try { saveData(users, groups); } catch (e) { console.warn('Error guardando datos en SIGINT:', e.message); }
      process.exit(0);
    });
  });
});