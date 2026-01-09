const axios = require('axios');
const { XAI_API_KEY } = require('./config');

/**
 * getAIResponse: llamada mínima a una API de IA (usa XAI_API_KEY).
 * Ajusta la URL/headers según tu proveedor real.
 */
async function getAIResponse(userMessage) {
  try {
    if (!XAI_API_KEY) return 'IA no configurada.';
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
    return response.data?.choices?.[0]?.message?.content?.trim() || 'Respuesta vacía de la IA.';
  } catch (error) {
    console.warn('getAIResponse error:', error.message);
    return 'Ups, error con IA.';
  }
}

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
];

async function downloadMedia(type, url) {
  try {
    const randomApi = API_BASES[Math.floor(Math.random() * API_BASES.length)];
    const response = await axios.get(`${randomApi}${type}?url=${encodeURIComponent(url)}`);
    return response.data?.result?.download_url || response.data?.result?.url || response.data?.url || null;
  } catch (error) {
    console.warn('downloadMedia error:', error.message);
    return null;
  }
}

module.exports = {
  getAIResponse,
  downloadMedia
};