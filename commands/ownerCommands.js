// commands/ownerCommands.js - Owner exclusive commands
const { OWNER_NUMBER } = require('../config');
const child_process = require('child_process');

module.exports = async (sock, msg, from, body, parts, cmd) => {
  const userId = msg.key.participant || from;
  if (userId !== OWNER_NUMBER) return; // Solo owner: +57 3107400303

  switch (cmd) {
    case '#update':
      try {
        child_process.execSync('git pull');
        await sock.sendMessage(from, { text: 'Bot actualizado! Reiniciando...' });
        process.exit(0); // Restart bot
      } catch (error) {
        await sock.sendMessage(from, { text: 'Error al actualizar: ' + error.message });
      }
      break;

    // Agrega más comandos owner si necesitas, ej. #restart, #broadcast
  }
};
