import fs from 'fs';

// Lista de dueños autorizados
global.authorizedOwners = ['573107400303', '573508941325', '573235915041'];

// Número del bot (dejar vacío si se detecta automáticamente)
global.botPhone = '';

// Nombre de la sesión principal
global.mainSession = 'Sessions/Owner';

// Versión actual del bot
global.botVersion = '^2.0 - Latest';

// Créditos del desarrollador
global.developerCredit = "© power by 𝓐";

// Enlaces relacionados con el bot
global.botLinks = {
  apiEndpoint: 'https://api.stellarwa.xyz',
  localWeb: 'http://localhost:5010',
  waChannel: "https://whatsapp.com/channel/0029Vb64nWqLo4hb8cuxe23n",
  repo: "https://github.com/makiharukawabot-cmd/makiharukawa-bot",
  email: "makiharukawa.bot@gmail.com"
};

// Información personal del bot
global.botInfo = {
  channelId: '120363401404146384@newsletter',
  displayName: '❖ 𝐌𝐀𝐊𝐈 𝐇𝐀𝐑𝐔𝐊𝐀𝐖𝐀・𝑪𝒉𝒂𝒏𝒏𝒆𝒍 ❖',
};

// Mensajes de error estandarizados
global.errorMessages = {
  onlySocket: '《✧》 Este comando solo puede ser ejecutado por un Socket.',
  onlyAdmin: '《✧》 Este comando solo puede ser ejecutado por los Administradores del Grupo.',
  botNeedsAdmin: '《✧》 Este comando solo puede ser ejecutado si el Socket es Administrador del Grupo.'
};

// Configuración de APIs externas
global.externalApis = {
  adonix: { baseUrl: "https://api-adonix.ultraplus.click", apiKey: "Yuki-WaBot" },
  vreden: { baseUrl: "https://api.vreden.web.id", apiKey: null },
  nekolabs: { baseUrl: "https://api.nekolabs.web.id", apiKey: null },
  siputzx: { baseUrl: "https://api.siputzx.my.id", apiKey: null },
  delirius: { baseUrl: "https://api.delirius.store", apiKey: null },
  ootaizumi: { baseUrl: "https://api.ootaizumi.web.id", apiKey: null },
  stellar: { baseUrl: "https://api.stellarwa.xyz", apiKey: "YukiWaBot", secondaryKey: '1bcd4698ce6c75217275c9607f01fd99' },
  apifaa: { baseUrl: "https://api-faa.my.id", apiKey: null },
  xyro: { baseUrl: "https://api.xyro.site", apiKey: null },
  yupra: { baseUrl: "https://api.yupra.my.id", apiKey: null }
};

// Prefijo para comandos (agregado para consistencia)
global.commandPrefix = /^[#]/;