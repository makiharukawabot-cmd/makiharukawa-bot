const { getAnimeReact } = require('../utils');

module.exports = async (sock, msg, from, body, parts, cmd) => {
  switch (cmd) {
    case '#angry':
      const angryImg = await getAnimeReact('angry');
      if (angryImg) await sock.sendMessage(from, { image: { url: angryImg } });
      break;

    // Agrega todos: #bath, #bite, #bleh, #blush, #bored, #call, #clap, #coffee, #cold, #cook, #cry, #cuddle, #dance, #dramatic, #draw, #drunk, #eat, #facepalm, #gaming, #greet, #happy, #heat, #hug, #impregnate, #jump, #kill, #kiss, #kisscheek, #laugh, #lewd, #lick, #love, #nope, #pat, #poke, #pout, #psycho, #punch, #push, #run, #sad, #scared, #scream, #seduce, #shy, #sing, #slap, #sleep, #smoke, #spit, #step, #think, #tickle, #walk, #yep con getAnimeReact(category).
  }
};
