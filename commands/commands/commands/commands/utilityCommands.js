module.exports = async (sock, msg, from, body, parts, cmd) => {
  switch (cmd) {
    case '#bots':
      // Lógica para ver sockets
      break;

    // Agrega todos: #del, #getpic, #invite, #menu (send image with MENU_TEXT caption), #ping, #status, #suggest, #testwelcome, #toimage.
    case '#menu':
      await sock.sendMessage(from, { image: { url: MENU_IMAGE }, caption: MENU_TEXT });
      break;
  }
};
