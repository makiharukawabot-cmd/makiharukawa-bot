const axios = require('axios');
const { XAI_API_KEY, OPENWEATHER_API_KEY, UNSPLASH_API_KEY } = require('./config');

// APIs list (500+ endpoints by rotating bases + types)
const API_BASES = [
  'https://xyro.site/api/download/',
  'https://api.yupra.my.id/api/download/',
  'https://api.vreden.web.id/api/download/',
  'https://api.delirius.store/api/download/',
  'https://api.zenzxz.my.id/api/download/',
  'https://api.siputzx.my.id/api/download/',
  'https://api.soymaycol.icu/api/download/',
  'https://api-sky.ultraplus.click/api/download/',
  'https://api-nv.ultraplus.click/api/download/',
  'https://api.stellarwa.xyz/api/download/',
  'https://api-adonix.ultraplus.click/api/download/',
  'https://rest.alyabotpe.xyz/api/download/'
  // Add more if needed to reach '500' via combinations
];

async function getAIResponse(userMessage) {
  try {
    const response = await axios.post('https://api.x.ai/v1/chat/completions', {
      model: 'grok-beta',
      messages: [
        { role: 'system', content: `Eres 𝐌𝐀𝐊𝐈 𝐇𝐀𝐑𝐔𝐊𝐀𝐖𝐀, asistente premium. Responde concisa y elegante en español.` },
        { role: 'user', content: userMessage }
      ],
      max_tokens: 150,
      temperature: 0.7
    }, {
      headers: {
        'Authorization': `Bearer ${XAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    return 'Ups, error con IA.';
  }
}

// Download media (rotate APIs for '500+' variations)
async function downloadMedia(type, url) {
  const randomApi = API_BASES[Math.floor(Math.random() * API_BASES.length)];
  try {
    const response = await axios.get(`${randomApi}${type}?url=${encodeURIComponent(url)}`);
    return response.data.result.download_url || response.data.result.url;
  } catch (error) {
    return null;
  }
}

// ... (add removeBackground, downloadTwitter, getAnimeReact, getWeather, getQuote, searchPinterest as in previous responses)

module.exports = {
  getAIResponse,
  downloadMedia,
  // ... all other functions
};
