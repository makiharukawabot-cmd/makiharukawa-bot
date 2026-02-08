const axios = require('axios');
const { XAI_API_KEY, OPENWEATHER_API_KEY, UNSPLASH_API_KEY } = require('./sentting.js');

// APIs list (rotating for '500+' variations)
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

async function getAIResponse(userMessage) {
  try {
    const response = await axios.post('https://api.x.ai/v1/chat/completions', {
      model: 'grok-beta',
      messages: [
        { role: 'system', content: `Eres 𝐌𝐀𝐊𝐈 𝐀𝐈, asistente premium. Responde concisa y elegante en español.` },
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

// Download media
async function downloadMedia(type, url) {
  const randomApi = API_BASES[Math.floor(Math.random() * API_BASES.length)];
  try {
    const response = await axios.get(`${randomApi}${type}?url=${encodeURIComponent(url)}`);
    return response.data.result.download_url || response.data.result.url;
  } catch (error) {
    return null;
  }
}

// Remove background
async function removeBackground(imageUrl) {
  try {
    const response = await axios.get(`https://api.zenzxz.my.id/tools/removebg?url=${encodeURIComponent(imageUrl)}`);
    return response.data.url;
  } catch (error) {
    return null;
  }
}

// Download Twitter
async function downloadTwitter(url) {
  try {
    const response = await axios.get(`https://api.siputzx.my.id/api/d/twitter?url=${encodeURIComponent(url)}`);
    return response.data.url;
  } catch (error) {
    return null;
  }
}

// Anime react
async function getAnimeReact(category) {
  const fallbacks = {
    'bored': 'cringe',
    'facepalm': 'bonk',
    // Add more for all anime commands
  };
  const finalCat = fallbacks[category] || category;
  try {
    const response = await axios.get(`https://api.waifu.pics/sfw/${finalCat}`);
    return response.data.url;
  } catch (error) {
    return null;
  }
}

// Weather
async function getWeather(city) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=es`);
    const data = response.data;
    return `Clima en ${data.name}: ${data.weather[0].description}, Temp: ${data.main.temp}°C`;
  } catch (error) {
    return 'Error al obtener clima';
  }
}

// Quote
async function getQuote() {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    return `"${response.data.content}" - ${response.data.author}`;
  } catch (error) {
    return 'Cita random: "Sé el cambio." - Gandhi';
  }
}

// Pinterest search
async function searchPinterest(query) {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_API_KEY}&per_page=1`);
    return response.data.results[0].urls.regular;
  } catch (error) {
    return null;
  }
}

module.exports = {
  getAIResponse,
  downloadMedia,
  removeBackground,
  downloadTwitter,
  getAnimeReact,
  getWeather,
  getQuote,
  searchPinterest
};
