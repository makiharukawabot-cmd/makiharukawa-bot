
// utils.js - Utilities and constants (including MENU_TEXT)
const axios = require('axios');
const { XAI_API_KEY, OPENWEATHER_API_KEY, UNSPLASH_API_KEY } = require('./config');

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

const MENU_TEXT = `𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 𝐌𝐀𝐊𝐈 𝐀𝐈 (𝐏𝐫𝐞𝐦-𝐁𝐨𝐭)\nᴀǫᴜɪ ᴛɪᴇɴᴇs ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs\n╭┈ ↷\n│ ✐ 𝓓𝓮𝔀𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂 𝙇𝙞𝙜𝙝𝙩𝙣𝙞𝙣𝙜𝙉𝙚𝙠𝙤 ❤️\n│ ✐ ꒷ꕤ💎ദ ᴄᴏᴍᴀɴᴅᴏs ෴\n│ https://nekos.club/commands\n│ ✐ ꒷ꕤ💎ദ ᴄᴀɴᴀʟ ᴏғɪᴄɪᴀʟ ෴\n│ https://whatsapp.com/channel/0029VaGWwUfB4hdVxH1MDu43\n╰─────────────────\n» ˚୨•(=^●ω●^=)• ⊹ \`Economía\` ⊹\n> ✐ Comandos de *Economía* para ganar dinero y divertirte con tus amigos.\n✧ \`#balance\` \`#bal\` \`#coins\` _<usuario>_\n> Ver cuantos coins tienes.\n✧ \`#coinflip\` \`#flip\` \`#cf\` _[cantidad] <cara/cruz>_\n> Apostar coins en un cara o cruz.\n✧ \`#crime\`\n> Ganar coins rapido.\n✧ \`#daily\`\n> Reclamar tu recompensa diaria.\n✧ \`#deposit\` \`#dep\` \`#depositar\` \`#d\` _[cantidad] | all_\n> Depositar tus coins en el banco.\n✧ \`#economyboard\` \`#eboard\` \`#baltop\` _<pagina>_\n> Ver el ranking de usuarios con más coins.\n✧ \`#economyinfo\` \`#einfo\`\n> Ver tu información de economía en el grupo.\n✧ \`#givecoins\` \`#pay\` \`#coinsgive\` _[usuario] [cantidad]_\n> Dar coins a un usuario.\n✧ \`#roulette\` \`#rt\` _[red/black] [cantidad]_\n> Apostar coins en una ruleta.\n✧ \`#slut\`\n> Ganar coins prostituyéndote.\n✧ \`#steal\` \`#robar\` \`#rob\` _[@mencion]_\n> Intentar robar coins a un usuario.\n✧ \`#withdraw\` \`#with\` \`#retirar\` _[cantidad] | all_\n> Retirar tus coins en el banco.\n✧ \`#work\` \`#w\`\n> Ganar coins trabajando.\n» ˚୨•(=^●ω●^=)• ⊹ \`Stickers\` ⊹\n> ✐ Comandos de *Stickers* para crear y gestionar stickers.\n✧ \`#delpack\` _[nombre del paquete]_\n> Elimina un paquete de stickers.\n✧ \`#delstickermeta\` \`#delmeta\`\n> Restablecer el pack y autor por defecto para tus stickers.\n✧ \`#getpack\` \`#stickerpack\` \`#pack\` _[nombre del paquete]_\n> Descarga un paquete de stickers.\n✧ \`#newpack\` \`#newstickerpack\` _[nombre del paquete]_\n> Crea un nuevo paquete de stickers.\n✧ \`#packfavourite\` \`#setpackfav\` \`#packfav\` _[nombre del paquete]_\n> Establece un paquete de stickers como favorito.\n✧ \`#packunfavourite\` \`#unsetpackfav\` \`#packunfav\` _[nombre del paquete]_\n> Elimina un paquete de stickers de favoritos.\n✧ \`#setpackprivate\` \`#setpackpriv\` \`#packprivate\` _[nombre del paquete]_\n> Establecer un paquete de stickers como privado.\n✧ \`#setpackpublic\` \`#setpackpub\` \`#packpublic\` _[nombre del paquete]_\n> Establecer un paquete de stickers como público.\n✧ \`#setstickermeta\` \`#setmeta\` _[autor] | [pack]_\n> Establecer el pack y autor por defecto para tus stickers.\n✧ \`#setstickerpackdesc\` \`#setpackdesc\` \`#packdesc\` _[nombre del paquete] | [descripción]_\n> Establece la descripción de un paquete de stickers.\n✧ \`#sticker\` \`#s\` \`#stickers\` _{citar una imagen/video}_\n> Convertir una imagen/video a sticker\n✧ \`#stickeradd\` \`#addsticker\` _[nombre del paquete]_\n> Agrega un sticker a un paquete de stickers.\n✧ \`#stickerdel\` \`#delsticker\` _[nombre del paquete]_\n> Elimina un sticker de un paquete de stickers.\n✧ \`#stickerpacks\` \`#packlist\`\n> Lista de tus paquetes de stickers.\n» ˚୨•(=^●ω●^=)• ⊹ \`Gacha\` ⊹\n> ✐ Comandos de *Gacha* para reclamar y intercambiar personajes.\n✧ \`#buycharacter\` \`#buychar\` \`#buyc\` _[nombre]_\n> Comprar un personaje en venta.\n✧ \`#charimage\` \`#waifuimage\` \`#cimage\` \`#wimage\` _[nombre]_\n> Ver una imagen aleatoria de un personaje.\n✧ \`#charinfo\` \`#winfo\` \`#waifuinfo\` _[nombre]_\n> Ver información de un personaje.\n✧ \`#charvideo\` \`#waifuvideo\` \`#cvideo\` \`#wvideo\` _[nombre]_\n> Ver un video aleatorio de un personaje.\n✧ \`#claim\` \`#c\` \`#reclamar\` _{citar personaje}_\n> Reclamar un personaje.\n✧ \`#delclaimmsg\`\n> Restablecer el mensaje al reclamar un personaje\n✧ \`#deletewaifu\` \`#delwaifu\` \`#delchar\` _[nombre]_\n> Eliminar un personaje reclamado.\n✧ \`#favoritetop\` \`#favtop\`\n> Ver el top de personajes favoritos.\n✧ \`#gachainfo\` \`#ginfo\` \`#infogacha\`\n> Ver tu información de gacha.\n✧ \`#giveallharem\` _[@usuario]_\n> Regalar todos tus personajes a otro usuario.\n✧ \`#givechar\` \`#givewaifu\` \`#regalar\` _[@usuario] [nombre]_\n> Regalar un personaje a otro usuario.\n✧ \`#harem\` \`#waifus\` \`#claims\` _<@usuario>_\n> Ver tus personajes reclamados.\n✧ \`#haremshop\` \`#tiendawaifus\` \`#wshop\` _<Pagina>_\n> Ver los personajes en venta.\n✧ \`#removesale\` \`#removerventa\` _[precio] [nombre]_\n> Eliminar un personaje en venta.\n✧ \`#rollwaifu\` \`#rw\` `#roll`\n> Waifu o husbando aleatorio\n✧ `#sell` `#vender` _[precio] [nombre]_\n> Poner un personaje a la venta.\n✧ `#serieinfo` `#ainfo` `#animeinfo` _[nombre]_\n> Información de un anime.\n✧ `#serielist` `#slist` `#animelist`\n> Listar series del bot\n✧ `#setclaimmsg` `#setclaim` _[mensaje]_\n> Modificar el mensaje al reclamar un personaje\n✧ `#trade` `#intercambiar` _[Tu personaje] / [Personaje 2]_\n> Intercambiar un personaje con otro usuario\n✧ `#vote` `#votar` _[nombre]_\n> Votar por un personaje para subir su valor.\n✧ `#waifusboard` `#waifustop` `#topwaifus` `#wtop` _[número]_\n> Ver el top de personajes con mayor valor.\n» ˚୨•(=^●ω●^=)• ⊹ \`Descargas\` ⊹\n> ✐ Comandos de *Descargas* para descargar archivos de varias fuentes.\n✧ `#facebook` `#fb` _[Link]_\n> Descargar un video de Facebook\n✧ `#hitomi` `#hitomila` _[link|codigo]_\n> Descargar un galería o video de hitomi\n✧ `#mediafire` `#mf`\n> Descargar un archivo de MediaFire\n✧ `#mp4` `#ytmp4` `#mp4doc` _[Cancion]_\n> Descargar un video de YouTube\n✧ `#nhentai` `#nh` `#nhdl` _[id]_\n> Descarga un doujin de nhentai\n✧ `#pinterest` `#pin` _[busqueda]_\n> Buscar y descargar imagenes de Pinterest\n✧ `#play` `#yt` `#ytaudio` `#playaudio` _[Cancion]_\n> Descargar una cancion de YouTube como audio o documento\n✧ `#pornhub` `#ph` _[Link]_\n> Descargar un video de Pornhub\n✧ `#reel` `#ig` `#instagram` _[Link]_\n> Descargar un reel de Instagram\n✧ `#tiktok` `#tt`\n> Descargar un video de TikTok\n✧ `#twitter` `#x` _[Link]_\n> Descargar un video de Twitter/X\n✧ `#vermangasporno` `#vmp` _[url/id]_\n> Descargar un manga de VerMangasPorno\n✧ `#ytsearch` `#search` _[busqueda]_\n> Buscar videos de YouTube\n» ˚୨•(=^●ω●^=)• ⊹ \`Perfiles\` ⊹\n> ✐ Comandos de *Perfil* para ver y configurar tu perfil.\n✧ `#allbirthdays` `#allbirths`\n> Ver todos los cumpleaños.\n✧ `#birthdays` `#cumpleaños` `#births`\n> Ver cumpleaños cercanos en el grupo.\n✧ `#delbirth` _[fecha]_\n> Borrar tu fecha de cumpleaños.\n✧ `#delgenre`\n> Eliminar tu genero.\n✧ `#divorce`\n> Divorciarte de tu pareja.\n✧ `#gp` `#group`\n> Informacion del grupo.\n✧ `#leaderboard` `#lboard` `#top` _<Paginá>_\n> Top de usuarios con más experiencia.\n✧ `#level` `#lvl` _<@Mencion>_\n> Ver tu nivel y experiencia actual.\n✧ `#marry` `#casarse` _<@Mencion>_\n> Casarte con alguien.\n✧ `#profile` _<@Mencion>_\n> Ver tu perfil.\n✧ `#setbirth` _[fecha]_\n> Establecer tu fecha de cumpleaños.\n✧ `#setdescription` `#setdesc` _[Descripcion]_\n> Establecer tu descripcion.\n✧ `#setfavourite` `#setfav` _[Personaje]_\n> Establecer tu claim favorito.\n✧ `#setgenre` _Hombre | Mujer_\n> Establecer tu genero.\n» ˚୨•(=^●ω●^=)• ⊹ \`Sub-bots\` ⊹\n> ✐ Comandos para registrar tu propio bot.\n✧ `#autojoin` _[enable/disable]_\n> Unirse automáticamente a grupos enviados por el dueño del bot en privado.\n✧ `#botinfo` `#infobot`\n> Obtener informacion del bot\n✧ `#join` _[Invitacion]_\n> Unir al bot a un grupo\n✧ `#leave` `#salir`\n> Salir de un grupo\n✧ `#logout`\n> Cerrar sesion del bot\n✧ `#qr` `#code`\n> Crear un Sub-Bot con un codigo QR/Code\n✧ `#qrpremium` `#codepremium` _[Token]_\n> Crear un sub-bot premium\n✧ `#qrtemporal` `#codetemporal`\n> Crear un Sub-Bot temporal con un codigo QR/Code\n✧ `#reload`\n> Recargar la sesion del bot\n✧ `#setbanner` `#setmenubanner`\n> Cambiar el banner del menu\n✧ `#setbotcurrency` _[nombre]_\n> Cambiar la moneda del bot\n✧ `#setbotowner` _[nombre]_\n> Cambiar el dueño del bot\n✧ `#setname` `#setbotname` _[nombre corto] / [nombre largo]_\n> Cambiar el nombre del bot\n✧ `#setpfp` `#setimage`\n> Cambiar la imagen de perfil\n✧ `#setstatus` _[estado]_\n> Cambiar el estado del bot\n✧ `#setusername` _[nombre]_\n> Cambiar el nombre de usuario\n» ˚୨•(=^●ω●^=)• ⊹ \`Útilidades\` ⊹\n> ✐ Comandos de *Útilidades*\n✧ `#bots` `#sockets`\n> Ver el numero de bots activos.\n✧ `#del` `#delete` _{citar un mensaje}_\n> Eliminar un mensaje.\n✧ `#getpic` `#pfp` _[@usuario]_\n> Ver la foto de perfil de un usuario.\n✧ `#invite` _[Invitacion]_\n> Invitar al bot a un grupo.\n✧ `#menu` `#help` `#commands` `#comandos`\n> Ver el menú de comandos.\n✧ `#ping` `#p`\n> Medir tiempo de respuesta\n✧ `#status`\n> Ver estado del bot\n✧ `#suggest` `#add` `#addanime` `#report` _[Nombre]_\n> Solicitar un anime/serie/juego o personaje faltante\n✧ `#testwelcome` `#testgoodbye`\n> Prueba el mensaje de bienvenida/despedida.\n✧ `#toimage` `#toimg` _{citar sticker}_\n> Convertir un sticker/imagen de una vista a imagen.\n» ˚୨•(=^●ω●^=)• ⊹ \`Administración\` ⊹\n> ✐ Comandos para administradores de grupos.\n✧ `#alerts` `#alertas` _[enable/disable]_\n> Activar/desactivar las alertas de promote/demote\n✧ `#antilink` `#antienlace` _[enable/disable]_\n> Activar/desactivar el antienlace\n✧ `#bot` _[enable/disable]_\n> Activar/desactivar al bot\n✧ `#close`\n> Cerrar el grupo para que solo los administradores puedan enviar mensajes.\n✧ `#delwarn` _<@usuario> <número de advertencia>_\n> Eliminar una advertencia de un miembro del grupo.\n✧ `#demote` _<@usuario> | {mencion}_\n> Descender a un usuario de administrador.\n✧ `#economy` `#economia` _[enable/disable]_\n> Activar/desactivar los comandos de economía\n✧ `#gacha` _[enable/disable]_\n> Activar/desactivar los comandos de GACHA\n✧ `#goodbye` `#despedida` _[enable/disable]_\n> Activar/desactivar la despedida\n✧ `#groupimage` `#groupimg` `#gpimg` `#setgroupimage`\n> Cambiar la imagen del grupo.\n✧ `#kick` _<@usuario> | {mencion}_\n> Expulsar a un usuario del grupo.\n✧ `#msgcount` `#count` `#messages` `#mensajes` _<@usuario> <dias>_\n> Obtener el conteo de mensajes y comandos de un usuario.\n✧ `#nsfw` _[enable/disable]_\n> Activar/desactivar los comandos NSFW\n✧ `#onlyadmin` `#onlyadmins` _[enable/disable]_\n> Permitir que solo los administradores puedan utilizar los comandos.\n✧ `#open`\n> Abrir el grupo para que todos los usuarios puedan enviar mensajes.\n✧ `#promote` _<@usuario> | {mencion}_\n> Ascender a un usuario a administrador.\n✧ `#setgoodbye` _[texto]_\n> Establecer un mensaje de despedida personalizado.\n✧ `#setprimary` _[@bot]_\n> Establece un bot como primario del grupo.\n✧ `#setwarnlimit` _<número de advertencias>_\n> Establecer el límite de advertencias para un grupo.\n✧ `#setwelcome` _[texto]_\n> Establecer un mensaje de bienvenida personalizado.\n✧ `#tag` `#hidetag` `#tagsay` `#tagall` _[mensaje]_\n> Envía un mensaje mencionando a todos los usuarios del grupo.\n✧ `#topcount` `#topmessages` `#topmsgcount` `#topmensajes` _<dias>_\n> Obtener el top de usuarios con más mensajes en el grupo.\n✧ `#topinactive` `#topinactivos` `#topinactiveusers` _<dias>_\n> Obtener el top de usuarios más inactivos en el grupo.\n✧ `#warn` _<@usuario> <razón>_\n> Darle una advertencia a un miembro del grupo.\n✧ `#warns` _<@usuario>_\n> Ver todas las advertencias de un miembro del grupo.\n✧ `#welcome` `#bienvenida` _[enable/disable]_\n> Activar/desactivar la bienvenida  
» ˚୨•(=^●ω●^=)• ⊹ \`NSFW\` ⊹  
> ✐ Comandos *NSFW* (Contenido para adultos)  
✧ `#anal` _<mencion>_  
> Hacer un anal  
✧ `#ass` `#poto`  
> Ver un culo  
✧ `#blowjob` `#mamada` `#bj` _<mencion>_  
> Dar una mamada  
✧ `#boobjob` _<mencion>_  
> Hacer una rusa  
✧ `#cum` _<mencion>_  
> Venirse en alguien  
✧ `#cummouth` _<mencion>_  
> Acabar en la boca de alguien  
✧ `#cumshot` _<mencion>_  
> Disparar semen  
✧ `#danbooru` `#dbooru` _[Tags]_  
> Buscar imagenes en Danbooru  
✧ `#e621` _[Tags]_  
> Buscar imagenes en e621.  
✧ `#fap` `#paja` _<mencion>_  
> Hacerse una paja  
✧ `#footjob` _<mencion>_  
> Hacer una paja con los pies  
✧ `#fuck` `#coger` _<mencion>_  
> Follarte a alguien  
✧ `#gelbooru` `#gbooru` `#booru` _[Tags]_  
> Buscar imagenes en Gelbooru  
✧ `#grabboobs` _<mencion>_  
> Agarrar tetas  
✧ `#grope` _<mencion>_  
> Manosear a alguien  
✧ `#handjob` _<mencion>_  
> Hacer una paja  
✧ `#hentai`  
> Hentai aleatorio  
✧ `#lickass` _<mencion>_  
> Lamer un culo  
✧ `#lickdick` _<mencion>_  
> Lamer un pene  
✧ `#lickpussy` _<mencion>_  
> Lamer un coño  
✧ `#loli`  
> Loli aleatoria  
✧ `#nekomimi` `#neko`  
> Neko aleatoria  
✧ `#pussy`  
> Coño aleatorio  
✧ `#rule34` `#r34` _[Tags]_  
> Buscar imagenes en Rule34  
✧ `#sixnine` `#69` _<mencion>_  
> Haz un 69 con alguien  
✧ `#spank` `#nalgada` _<mencion>_  
> Dar una nalgada  
✧ `#suckboobs` _<mencion>_  
> Chupar tetas  
✧ `#undress` `#encuerar` _<mencion>_  
> Desnudar a alguien  
✧ `#yuri` `#tijeras` _<mencion>_  
> Hacer tijeras.  
» ˚୨•(=^●ω●^=)• ⊹ \`Anime\` ⊹  
> ✐ Comandos de reacciones de anime.  
✧ `#angry` `#enojado` _<mencion>_  
> Estar enojado  
✧ `#bath` _<mencion>_  
> Bañarse  
✧ `#bite` _<mencion>_  
> Muerde a alguien  
✧ `#bleh` _<mencion>_  
> Sacar la lengua  
✧ `#blush` _<mencion>_  
> Sonrojarte  
✧ `#bored` `#aburrido` _<mencion>_  
> Estar aburrido  
✧ `#call` _<mencion>_  
> Llamar a alguien  
✧ `#clap` `#aplaudir` _<mencion>_  
> Aplaudir  
✧ `#coffee` `#cafe` _<mencion>_  
> Tomar cafe  
✧ `#cold` _<mencion>_  
> Tener frío  
✧ `#cook` _<mencion>_  
> Cocinar algo delicioso  
✧ `#cry` _<mencion>_  
> Llorar por algo o alguien  
✧ `#cuddle` _<mencion>_  
> Acurrucarse  
✧ `#dance` _<mencion>_  
> Sacate los pasitos prohíbidos  
✧ `#dramatic` `#drama` _<mencion>_  
> Drama  
✧ `#draw` _<mencion>_  
> Dibujar  
✧ `#drunk` _<mencion>_  
> Estar borracho  
✧ `#eat` `#comer` _<mencion>_  
> Comer algo delicioso  
✧ `#facepalm` _<mencion>_  
> Darte una palmada en la cara  
✧ `#gaming` _<mencion>_  
> Jugar videojuegos  
✧ `#greet` `#hi` _<mencion>_  
> Saludar a alguien  
✧ `#happy` `#feliz` _<mencion>_  
> Salta de felicidad  
✧ `#heat` _<mencion>_  
> Tener calor  
✧ `#hug` _<mencion>_  
> Dar un abrazo  
✧ `#impregnate` `#preg` `#preñar` _<mencion>_  
> Embarazar a alguien  
✧ `#jump` _<mencion>_  
> Saltar  
✧ `#kill` _<mencion>_  
> Toma tu arma y mata a alguien  
✧ `#kiss` `#muak` _<mencion>_  
> Dar un beso  
✧ `#kisscheek` `#beso` _<mencion>_  
> Beso en la mejilla  
✧ `#laugh` _<mencion>_  
> Reírte de algo o alguien  
✧ `#lewd` _<mencion>_  
> Hacer algo lascivo  
✧ `#lick` _<mencion>_  
> Lamer a alguien  
✧ `#love` `#amor` _<mencion>_  
> Sentirse enamorado  
✧ `#nope` _<mencion>_  
> Negarse a hacer algo  
✧ `#pat` _<mencion>_  
> Acaricia a alguien  
✧ `#poke` _<mencion>_  
> Picar a alguien  
✧ `#pout` _<mencion>_  
> Hacer pucheros  
✧ `#psycho` _<mencion>_  
> Hacerse el psicópata  
✧ `#punch` _<mencion>_  
> Dar un puñetazo  
✧ `#push` _<mencion>_  
> Empujar a alguien  
✧ `#run` _<mencion>_  
> Correr  
✧ `#sad` `#triste` _<mencion>_  
> Expresar tristeza  
✧ `#scared` _<mencion>_  
> Estar asustado  
✧ `#scream` _<mencion>_  
> Gritar  
✧ `#seduce` _<mencion>_  
> Seducir a alguien  
✧ `#shy` `#timido` _<mencion>_  
> Sentir timidez  
✧ `#sing` _<mencion>_  
> Cantar  
✧ `#slap` _<mencion>_  
> Dar una bofetada  
✧ `#sleep` _<mencion>_  
> Tumbarte a dormir  
✧ `#smoke` _<mencion>_  
> Fumar  
✧ `#spit` `#escupir` _<mencion>_  
> Escupir  
✧ `#step` `#pisar` _<mencion>_  
> Pisar a alguien  
✧ `#think` _<mencion>_  
> Pensar en algo  
✧ `#tickle` _<mencion>_  
> Hacer cosquillas  
✧ `#walk` _<mencion>_  
> Caminar  
