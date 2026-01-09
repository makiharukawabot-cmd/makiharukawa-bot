const { BOT_NAME } = require('../config');
const pkg = require('../package.json');

function formatUptime(seconds) {
  seconds = Math.floor(seconds);
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hrs = Math.floor(seconds / 3600);
  seconds %= 3600;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${days}d ${hrs}h ${mins}m ${secs}s`;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function safeSend(sock, jid, message) {
  try {
    await sock.sendMessage(jid, { text: message });
  } catch (e) {
    console.warn('safeSend failed:', e && e.message);
  }
}

exports.run = async (sock, msg, args) => {
  const from = msg.key.remoteJid;
  const body = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
  const parts = String(body).split(/\s+/).filter(Boolean);
  const cmd = parts[0] ? parts[0].toLowerCase() : '';

  // Comandos implementados: help, info, uptime, joke, roll, say
  if (cmd === '/help' || cmd === 'help') {
    const text = `Comandos disponibles:\n\n` +
      `ping — responde Pong\n` +
      `help — muestra esta ayuda\n` +
      `info — información del bot\n` +
      `uptime — tiempo activo del bot\n` +
      `joke — chiste aleatorio\n` +
      `roll XdY — tira dados, ej. roll 2d6\n` +
      `say <texto> — hace que el bot repita el texto\n`;
    return safeSend(sock, from, text);
  }

  if (cmd === '/info' || cmd === 'info') {
    const text = `${BOT_NAME} — versión ${pkg.version || 'desconocida'}\n` +
      `Repositorio: https://github.com/makiharukawabot-cmd/makiharukawa-bot\n` +
      `Autor: ${pkg.author || 'desconocido'}`;
    return safeSend(sock, from, text);
  }

  if (cmd === '/uptime' || cmd === 'uptime') {
    const up = formatUptime(process.uptime());
    return safeSend(sock, from, `Uptime: ${up}`);
  }

  if (cmd === '/joke' || cmd === 'joke') {
    const jokes = [
      '¿Por qué los programadores confunden Halloween y Navidad? Porque OCT 31 == DEC 25.',
      '¿Cuántos programadores hacen falta para cambiar una bombilla? Ninguno — eso es un problema de hardware.',
      'I would tell you a UDP joke, but you might not get it.'
    ];
    return safeSend(sock, from, jokes[randInt(0, jokes.length - 1)]);
  }

  if (cmd === '/roll' || cmd === 'roll') {
    const arg = args[0] || '1d6';
    const m = String(arg).toLowerCase().match(/^(\d+)d(\d+)$/);
    if (!m) return safeSend(sock, from, 'Uso: roll XdY  — ejemplo: roll 2d6');
    const times = Math.min(100, Math.max(1, parseInt(m[1], 10)));
    const sides = Math.min(1000, Math.max(2, parseInt(m[2], 10)));
    const rolls = [];
    for (let i = 0; i < times; i++) rolls.push(randInt(1, sides));
    const total = rolls.reduce((a, b) => a + b, 0);
    return safeSend(sock, from, `Resultados: [${rolls.join(', ')}]\nTotal: ${total}`);
  }

  if (cmd === '/say' || cmd === 'say') {
    const text = args.join(' ').trim();
    if (!text) return safeSend(sock, from, 'Uso: say <texto>');
    return safeSend(sock, from, text);
  }

  // Si no fue un comando atendido, devolver false para que otros handlers puedan procesarlo
  return false;
};
