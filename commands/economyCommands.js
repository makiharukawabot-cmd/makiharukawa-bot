module.exports = async (sock, msg, from, body, parts, cmd, users, saveData) => {
  const userId = msg.key.participant || from;
  const user = users[userId] || { money: 0, dailyClaimed: false, bank: 0 }; // Agregué bank para deposit/withdraw

  switch (cmd) {
    case '#balance':
    case '#bal':
    case '#coins':
      const target = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || userId;
      const targetUser = users[target] || { money: 0 };
      await sock.sendMessage(from, { text: `Coins de @${target.replace('@s.whatsapp.net', '')}: ${targetUser.money}` });
      break;

    case '#coinflip':
    case '#flip':
    case '#cf':
      // Lógica para apostar cara/cruz
      if (parts.length < 3) return sock.sendMessage(from, { text: 'Uso: #coinflip [cantidad] <cara/cruz>' });
      const amount = parseInt(parts[1]);
      const side = parts[2];
      if (isNaN(amount) || amount > user.money) return sock.sendMessage(from, { text: 'Cantidad inválida o insuficiente.' });
      const result = Math.random() < 0.5 ? 'cara' : 'cruz';
      if (result === side) {
        user.money += amount;
        await sock.sendMessage(from, { text: `Ganaste ${amount} coins! Resultado: ${result}` });
      } else {
        user.money -= amount;
        await sock.sendMessage(from, { text: `Perdiste ${amount} coins. Resultado: ${result}` });
      }
      saveData(users, groups);
      break;

    case '#crime':
      const crimeGain = Math.floor(Math.random() * 100) - 20;
      user.money += crimeGain;
      await sock.sendMessage(from, { text: `Crimen: ${crimeGain > 0 ? 'Ganaste ' + crimeGain : 'Perdiste ' + Math.abs(crimeGain)} coins.` });
      saveData(users, groups);
      break;

    case '#daily':
      if (user.dailyClaimed) return sock.sendMessage(from, { text: 'Ya reclamaste hoy.' });
      user.money += 200;
      user.dailyClaimed = true;
      await sock.sendMessage(from, { text: 'Recompensa diaria: +200 coins. Total: ' + user.money });
      saveData(users, groups);
      break;

    case '#deposit':
    case '#dep':
    case '#depositar':
    case '#d':
      const depAmount = parts[1] === 'all' ? user.money : parseInt(parts[1]);
      if (isNaN(depAmount) || depAmount > user.money) return sock.sendMessage(from, { text: 'Cantidad inválida.' });
      user.money -= depAmount;
      user.bank += depAmount;
      await sock.sendMessage(from, { text: `Depositados ${depAmount} coins en el banco. Banco: ${user.bank}` });
      saveData(users, groups);
      break;

    // Agrega el resto: #economyboard, #economyinfo, #givecoins, #roulette, #slut, #steal, #withdraw, #work con lógica similar (random gains/losses, checks, etc.)

  }
};
