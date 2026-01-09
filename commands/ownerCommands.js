// Wrapper para legacy ownerCommands.js (adapta la firma antigua a la nueva)
// Firma legacy original: module.exports = async (sock, msg, from, body, parts, cmd) => { ... }
const path = require('path');
let legacy = null;

// Intenta cargar el legacy module (si existe con la firma antigua)
try {
  legacy = require('./ownerCommands');
} catch (e) {
  // Si falla, legacy se queda null y el wrapper no hará nada
  legacy = null;
}

exports.run = async (sock, msg, args, ctx) => {
  if (!legacy) return false;
  // Construir parámetros esperados por el legacy
  const from = ctx.from;
  const body = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
  const parts = ctx.parts || String(body).split(/\s+/).filter(Boolean);
  const cmd = ctx.cmd || (parts[0] ? parts[0].toLowerCase() : '');
  const userId = msg.key.participant || from;

  try {
    // El legacy original no devolvía true/false; llamamos y asumimos que si no lanza error procesó o no.
    await legacy(sock, msg, from, body, parts, cmd);
    // Para evitar bloquear otros handlers, devolvemos false salvo comandos owner explícitos.
    // Si el comando coincide con alguno owner, devolvemos true (evita que otros handlers lo procesen)
    const ownerCmds = ['#update', '#restart', '#broadcast'];
    if (ownerCmds.includes(cmd)) return true;
    return false;
  } catch (e) {
    console.warn('ownerCommands wrapper error:', e && e.message);
    return false;
  }
};
