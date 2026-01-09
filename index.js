const fs = require('fs');
const path = require('path');
const makeWASocket = require('@whiskeysockets/baileys').default;
const { useMultiFileAuthState } = require('@whiskeysockets/baileys');
const pino = require('pino');
const readline = require('readline');
const { BOT_NAME } = require('./config');
const { loadData, saveData } = require('./data');

function tryRequire(p) {
  try {
    return require(p);
  } catch (err) {
    console.warn(`Aviso: no se pudo cargar ${p}. Se usará placeholder. (${err && err.message})`);
    return {};
  }
}

// Cargar módulos de comandos de forma tolerante y normalizada
function loadCommandModules() {
  const cmdsDir = path.join(__dirname, 'commands');
  const modules = [];
  if (!fs.existsSync(cmdsDir)) return modules;
  const files = fs.readdirSync(cmdsDir).filter(f => f.endsWith('.js'));
  for (const file of files) {
    const full = path.join(cmdsDir, file);
    try {
      const mod = require(full);
      if (typeof mod === 'function') {
        modules.push({ name: file, run: mod });
      } else if (mod && typeof mod.run === 'function') {
        modules.push({ name: file, run: mod.run.bind(mod) });
      } else {
        console.warn(`El módulo ${file} no exporta una función ni { run } — se ignorará en tiempo de ejecución.`);
      }
    } catch (err) {
      console.warn(`Error cargando comando ${file}: ${err && err.message}`);
    }
  }
  return modules;
}

let handlers = loadCommandModules();

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
        const args = parts.slice(1);

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

        // Ruta rápida para ping (mantener compatibilidad)
        if (cmd === '/ping' || cmd === 'ping') {
          await sock.sendMessage(from, { text: 'Pong' }).catch(() => null);
        } else {
          // Ejecutar handlers cargados. Si un handler devuelve true se detiene la propagación.
          const ctx = { cmd, args, parts, from, userId, isGroup, groupSettings };
          for (const h of handlers) {
            if (h && typeof h.run === 'function') {
              try {
                const res = await h.run(sock, msg, args, ctx);
                // Si el handler devuelve true, asumimos que procesó el comando y paramos.
                if (res === true) break;
              } catch (e) {
                console.error(`Error en handler ${h.name || 'unknown'}:`, e && e.stack || e);
              }
            }
          }
        }

      } catch (err) {
        console.error('Error procesando mensaje:', err && err.stack || err);
      } finally {
        // Guardar datos (debounce/optimización recomendable)
        try { saveData(users, groups); } catch (e) { console.warn('saveData failed:', e && e.message); }
      }
    });

    // Guardar al salir con CTRL+C
    process.on('SIGINT', () => {
      console.log('SIGINT recibido — guardando datos y saliendo...');
      try { saveData(users, groups); } catch (e) { console.warn('Error guardando datos en SIGINT:', e && e.message); }
      process.exit(0);
    });
  });
});
