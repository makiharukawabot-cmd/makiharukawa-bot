const { getAnimeReact } = require('../utils');

module.exports = async (sock, msg, from, body, parts, cmd) => {
  switch (cmd) {
    case '#anal':
      const analImg = await getAnimeReact('anal');
      if (analImg) await sock.sendMessage(from, { image: { url: analImg } });
      break;

    // Agrega todos: #ass, #blowjob, #boobjob, #cum, #cummouth, #cumshot, #danbooru (search API), #e621, #fap, #footjob, #fuck, #gelbooru, #grabboobs, #grope, #handjob, #hentai, #lickass, #lickdick, #lickpussy, #loli, #nekomimi, #pussy, #rule34, #sixnine, #spank, #suckboobs, #undress, #yuri con getAnimeReact or searches.
  }
};
