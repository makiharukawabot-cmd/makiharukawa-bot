export const bodyMenu = `> ✦ ¡Bienvenido, *@$sender*! Soy *$namebot*, tu guía en este mundo. Aquí la lista de comandos$cat

╭═✧═╯ ❖ INFO GENERAL ❖ ╰═✧═╮
│✦ *Desarrollador:* $owner
│✦ *Tipo:* $botType
│✦ *Versión:* ^2.0 - Latest
│✦ *Sistema:* $device
│✦ *Hora:* $tiempo, $tempo
│✦ *Usuarios:* $users
│✦ *Enlace:* $link
╰═✧═╮ ❖ POWER BY 𝓐 ❖ ╰═✧═╯
> Conecta un *Socket* con *$prefixqr* o *$prefixcode*.
✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦✧✦
> ❖ 𝐌𝐀𝐊𝐈 𝐇𝐀𝐑𝐔𝐊𝐀𝐖𝐀 - POWER BY 𝓐 ❖`;

export const menuObject = {
  utils: `╭═✧═╯ ❖ UTILIDADES ❖ ╰═✧═╮
> ✐ Herramientas esenciales para tu día a día con MAKI.
✦ *$prefixmenu » $prefixhelp » $prefixayuda* + <category>
> Muestra este menú de comandos.
✦ *$prefixbots » $prefixsockets*
> Lista de bots activos.
✦ *$prefixstatus » $prefixestado*
> Estado actual del bot.
✦ *$prefixping » $prefixp » $prefixspeed*
> Mide el tiempo de respuesta.
✦ *$prefixreport » $prefixreporte* + <error>
> Reporta un error a los devs.
✦ *$prefixsug » $prefixsuggest* + <suggest>
> Envía sugerencias.
✦ *$prefixinvitar » $prefixinvite* + <link>
> Invita al bot a un grupo.
✦ *$prefixia » $prefixchatgpt* + <query>
> Consulta a la IA.
✦ *$prefixsticker » $prefixs* + <cite / image|video>
> Crea stickers.
✦ *$prefixsetstickermeta » $prefixsetmeta* + <autor|pack>
> Configura metadata de stickers.
✦ *$prefixgetpic » $prefixpfp* + <mention>
> Foto de perfil.
✦ *$prefixtoimage » $prefixtoimg* + <cite / sticker>
> Sticker a imagen.
✦ *$prefixbrat » $prefixbratv » $prefixqc » $prefixemojimix* + <text|mention>
> Stickers con texto.
✦ *$prefixtourl* + <cite / image|video>
> Convierte a URL.
✦ *$prefixsay » $prefixdecir* + <text>
> Repite un mensaje.
✦ *$prefixtrad » $prefixtraducir » $prefixtranslate* + <language / text>
> Traduce texto.
✦ *$prefixget » $prefixfetch* + <url>
> Solicitud GET web.
✦ *$prefixhd » $prefixenhance » $prefixremini* + <cite / image>
> Mejora calidad de imagen.
✦ *$prefixgitclone » $prefixgit* + <url|query>
> Clona repos GitHub.
✦ *inspect » inspeccionar* + <url>
> Info de grupos/canales WA.
✦ *$prefixread » $prefixreadviewonce* + <cite / image|video>
> Lee vista única.
╰═✧═╮ ❖ UTILIDADES ❖ ╰═✧═╯`,
  grupo: `╭═✧═╯ ❖ GRUPOS ❖ ╰═✧═╮
> ✐ Administra tus grupos con precisión MAKI.
✦ *$prefixalerts » $prefixalertas* + <on|off>
> Alertas de grupo on/off.
✦ *antilinks » #antienlaces* + <on|off>
> Anti-enlaces on/off.
✦ *$prefixbot* + <on|off>
> Bot on/off en grupo.
✦ *$prefixclose » $prefixcerrar* + <time>
> Cierra el grupo.
✦ *$prefixgp » $prefixgroupinfo*
> Info del grupo.
✦ *$prefixdelwarn* + <mention / number|all>
> Borra advertencia.
✦ *$prefixdemote* + <mention>
> Descender admin.
✦ *$prefixeconomy » $prefixeconomia* + <on|off>
> Economía on/off.
✦ *$prefixgacha » $prefixrpg* + <on|off>
> Gacha on/off.
✦ *$prefixgoodbye » $prefixdespedida* + <on|off>
> Despedida on/off.
✦ *$prefixsetgpbaner* + <cite / image>
> Cambia banner grupo.
✦ *$prefixsetgpname* + <value>
> Cambia nombre grupo.
✦ *$prefixsetgpdesc* + <value>
> Cambia descripción grupo.
✦ *$prefixkick* + <mention>
> Expulsa usuario.
✦ *$prefixnsfw* + <on|off>
> NSFW on/off.
✦ *$prefixonlyadmin » $prefixadminonly* + <on|off>
> Solo admins comandos.
✦ *$prefixopen » $prefixabrir* + <time>
> Abre el grupo.
✦ *$prefixpromote* + <mention>
> Asciende admin.
✦ *$prefixsetgoodbye* + <value>
> Mensaje despedida.
✦ *$prefixsetprimary* + <mention>
> Bot primario.
✦ *$prefixsetwarnlimit* + <number>
> Límite advertencias.
✦ *$prefixsetwelcome* + <value>
> Mensaje bienvenida.
✦ *$prefixtag » $prefixhidetag » $prefixtagall* + <text>
> Tag a todos.
✦ *$prefixmsgcount » $prefixcount » $prefixmessages » $prefixmensajes* + <mention / days>
> Conteo de mensajes.
✦ *$prefixtopcount » $prefixtopmessages » $prefixtopmsgcount » $prefixtopmensajes* + <days>
> Top mensajes.
✦ *$prefixtopinactive » $prefixtopinactivos » $prefixtopinactiveusers* + <days>
> Top inactivos.
✦ *$prefixwarn* + <mention / reason>
> Advertencia usuario.
✦ *$prefixwarns* + <mention>
> Ver advertencias.
✦ *$prefixwelcome » $prefixbienvenida* + <on|off>
> Bienvenida on/off.
✦ *$prefixlink » $prefixrevoke*
> Link/revoke grupo.
╰═✧═╮ ❖ GRUPOS ❖ ╰═✧═╯`,
  economia: `╭═✧═╯ ❖ ECONOMÍA ❖ ╰═✧═╮
> ✐ Gana y administra coins en el sistema de MAKI.
✦ *$prefixw » $prefixwork » $prefixtrabajar*
> Gana coins trabajando.
✦ *$prefixbalance » $prefixbal » $prefixcoins* + <mention>
> Ver saldo de coins.
✦ *$prefixcoinflip » $prefixflip » $prefixcf* + <cantidad / cara|cruz>
> Apuesta en cara o cruz.
✦ *$prefixcrime » $prefixcrimen*
> Crímenes para coins rápidos.
✦ *$prefixdaily » $prefixdiario*
> Reclama diario.
✦ *$prefixdeposit » $prefixdep » $prefixdepositar » $prefixd* + <cantidad|all>
> Deposita coins.
✦ *$prefixeconomyboard » $prefixeboard » $prefixbaltop* + <page>
> Ranking coins.
✦ *$prefixcasino » $prefixapostar » $prefixslot* + <amount>
> Casino.
✦ *$prefixeconomyinfo » $prefixeinfo*
> Info economía.
✦ *$prefixgivecoins » $prefixpay » $prefixcoinsgive* + <cantidad|all / mention>
> Da coins.
✦ *$prefixroulette » $prefixrt » $prefixruleta* + <cantidad / red|black|green>
> Ruleta.
✦ *$prefixslut » $prefixprostituirse*
> Gana coins creativos.
✦ *$prefixsteal » $prefixrobar » $prefixrob* + <mention>
> Roba coins.
✦ *$prefixwithdraw » $prefixwith » $prefixretirar* + <cantidad|all>
> Retira coins.
✦ *$prefixminar » $prefixmine*
> Minería.
✦ *$prefixcofre » $prefixcoffer*
> Cofre diario.
✦ *$prefixweekly » $prefixsemanal*
> Bono semanal.
✦ *$prefixmonthly » $prefixmensual*
> Bono mensual.
✦ *$prefixaventura » $prefixadventure*
> Aventuras por coins.
✦ *$prefixcurar » $prefixheal*
> Cura salud.
✦ *$prefixcazar » $prefixhunt*
> Caza.
✦ *$prefixfish » $prefixpescar*
> Pesca.
✦ *$prefixmazmorra » $prefixdungeon*
> Mazmorras.
✦ *$prefixmath » $prefixmates* + <difficulty>
> Matemáticas por rewards.
✦ *$prefixppt* + <piedra|papel|tijera>
> Piedra papel tijera.
╰═✧═╮ ❖ ECONOMÍA ❖ ╰═✧═╯`,
  gacha: `╭═✧═╯ ❖ GACHA ❖ ╰═✧═╮
> ✐ Colecciona y intercambia personajes en el estilo MAKI.
✦ *$prefixbuycharacter » $prefixbuychar » $prefixbuyc* + <waifu>
> Compra personaje.
✦ *$prefixcharimage » $prefixwaifuimage » $prefixcimage » $prefixwimage* + <waifu>
> Imagen personaje.
✦ *$prefixcharinfo » $prefixwinfo » $prefixwaifuinfo* + <waifu>
> Info personaje.
✦ *$prefixclaim » $prefixc » $prefixreclamar* + <cite / waifu>
> Reclama waifu.
✦ *$prefixdelclaimmsg*
> Borra mensaje reclamo.
✦ *$prefixdeletewaifu » $prefixdelwaifu » $prefixdelchar* + <waifu>
> Elimina personaje.
✦ *$prefixfavoritetop » $prefixfavtop*
> Top favoritos.
✦ *$prefixgachainfo » $prefixginfo » $prefixinfogacha*
> Info gacha.
✦ *$prefixgiveallharem* + <mention>
> Regala harem.
✦ *$prefixgivechar » $prefixgivewaifu » $prefixregalar* + <waifu / mention>
> Regala personaje.
✦ *$prefixharem » $prefixwaifus » $prefixclaims* + <mention>
> Tu harem.
✦ *$prefixharemshop » $prefixtiendawaifus » $prefixwshop* + <page>
> Tienda waifus.
✦ *$prefixremovesale » $prefixremoverventa* + <waifu>
> Quita venta.
✦ *$prefixrollwaifu » $prefixrw » $prefixroll*
> Roll waifu.
✦ *$prefixsell » $prefixvender* + <value> <waifu>
> Vende personaje.
✦ *$prefixserieinfo » $prefixainfo » $prefixanimeinfo* <name>
> Info serie.
✦ *$prefixserielist » $prefixslist » $prefixanimelist*
> Lista series.
✦ *$prefixsetclaimmsg » $prefixsetclaim* + <text>
> Mensaje reclamo.
✦ *$prefixtrade » $prefixintercambiar* + <tu personaje / personaje 2>
> Intercambia.
✦ *$prefixvote » $prefixvotar* + <waifu>
> Vota waifu.
✦ *$prefixwaifusboard » $prefixwaifustop » $prefixtopwaifus » $prefixwtop* + <page>
> Top waifus.
╰═✧═╮ ❖ GACHA ❖ ╰═✧═╯`,
  anime: `╭═✧═╯ ❖ ANIME ❖ ╰═✧═╮
> ✐ Reacciones anime para divertirte con amigos.
✦ *$prefixwaifu » $prefixneko*
> Waifu aleatoria.
✦ *$prefixppcouple » $prefixppcp* 
> Parejas imágenes.
✦ *$prefixpeek » $prefixmirar* + <mention>
> Mirar.
✦ *$prefixcomfort » $prefixconsolar* + <mention>
> Consolar.
✦ *$prefixthinkhard » $prefixpensar* + <mention>
> Pensar intenso.
✦ *$prefixcurious » $prefixcurioso* + <mention>
> Curioso.
✦ *$prefixsniff » $prefixoler* + <mention>
> Oler.
✦ *$prefixstare » $prefixmirar* + <mention>
> Mirar fijamente.
✦ *$prefixtrip » $prefixtropezar* + <mention>
> Tropezar.
✦ *$prefixblowkiss » $prefixbesito* + <mention>
> Besito.
✦ *$prefixsnuggle » $prefixacurrucar* + <mention>
> Acurrucarse.
✦ *$prefixangry » $prefixenojado* + <mention>
> Enojado.
✦ *$prefixbleh » $prefixmeh* + <mention>
> Lengua fuera.
✦ *$prefixbored » $prefixaburrido* + <mention>
> Aburrido.
✦ *$prefixclap » $prefixaplaudir* + <mention>
> Aplaudir.
✦ *$prefixcoffee » $prefixcafe* + <mention>
> Café.
✦ *$prefixcold » $prefixfrio* + <mention>
> Frío.
✦ *$prefixsing » $prefixcantar* + <mention>
> Cantar.
✦ *$prefixtickle » $prefixcosquillas* + <mention>
> Cosquillas.
✦ *$prefixscream » $prefixgritar* + <mention>
> Gritar.
✦ *$prefixpush » $prefixempujar* + <mention>
> Empujar.
✦ *$prefixnope » $prefixno* + <mention>
> No.
✦ *$prefixjump » $prefixsaltar* + <mention>
> Saltar.
✦ *$prefixheat » $prefixcalor* + <mention>
> Calor.
✦ *$prefixgaming » $prefixjugar* + <mention>
> Jugar.
✦ *$prefixdraw » $prefixdibujar* + <mention>
> Dibujar.
✦ *$prefixcall » $prefixllamar* + <mention>
> Llamar.
✦ *$prefixdramatic » $prefixdrama* + <mention>
> Drama.
✦ *$prefixdrunk » $prefixborracho* + <mention>
> Borracho.
✦ *$prefiximpregnate » $prefixembarazar* + <mention>
> Embarazar.
✦ *$prefixkisscheek » $prefixbeso* + <mention>
> Beso mejilla.
✦ *$prefixlaugh » $prefixreir* + <mention>
> Reír.
✦ *$prefixlove » $prefixamor* + <mention>
> Amor.
✦ *$prefixpout » $prefixmueca* + <mention>
> Puchero.
✦ *$prefixpunch » $prefixgolpear* + <mention>
> Puñetazo.
✦ *$prefixrun » $prefixcorrer* + <mention>
> Correr.
✦ *$prefixsad » $prefixtriste* + <mention>
> Triste.
✦ *$prefixscared » $prefixasustado* + <mention>
> Asustado.
✦ *$prefixseduce » $prefixseducir* + <mention>
> Seducir.
✦ *$prefixshy » $prefixtimido* + <mention>
> Tímido.
✦ *$prefixsleep » $prefixdormir* + <mention>
> Dormir.
✦ *$prefixsmoke » $prefixfumar* + <mention>
> Fumar.
✦ *$prefixspit » $prefixescupir* + <mention>
> Escupir.
✦ *$prefixstep » $prefixpisar* + <mention>
> Pisar.
✦ *$prefixthink » $prefixpensar* + <mention>
> Pensar.
✦ *$prefixwalk » $prefixcaminar* + <mention>
> Caminar.
✦ *$prefixhug » $prefixabrazar* + <mention>
> Abrazo.
✦ *$prefixkill » $prefixmatar* + <mention>
> Matar.
✦ *$prefixeat » $prefixnom » $prefixcomer* + <mention>
> Comer.
✦ *$prefixkiss » $prefixmuak* + <mention>
> Beso.
✦ *$prefixwink* + <mention>
> Guiño.
✦ *$prefixpat* + <mention>
> Acariciar.
✦ *$prefixhappy » $prefixfeliz* + <mention>
> Feliz.
✦ *$prefixbully* + <mention>
> Bully.
✦ *$prefixbite » $prefixmorder* + <mention>
> Mordida.
✦ *$prefixblush* + <mention>
> Sonrojo.
✦ *$prefixwave* + <mention>
> Saludo.
✦ *$prefixbath* + <mention>
> Baño.
✦ *$prefixsmug* + <mention>
> Presumido.
✦ *$prefixsmile* + <mention>
> Sonrisa.
✦ *$prefixhighfive* + <mention>
> Choca cinco.
✦ *$prefixhandhold* + <mention>
> Mano.
✦ *$prefixcringe* + <mention>
> Cringe.
✦ *$prefixbonk* + <mention>
> Bonk.
✦ *$prefixcry* + <mention>
> Llanto.
✦ *$prefixlick* + <mention>
> Lamida.
✦ *$prefixslap* + <mention>
> Bofetada.
✦ *$prefixdance* + <mention>
> Baile.
✦ *$prefixcuddle* + <mention>
> Cuddle.
╰═✧═╮ ❖ ANIME ❖ ╰═✧═╯`,
  downloads: `╭═✧═╯ ❖ DESCARGAS ❖ ╰═✧═╮
> ✐ Descarga multimedia con facilidad en MAKI.
✦ *$prefixfacebook » $prefixfb* + <url>
> Video FB.
✦ *$prefixmediafire » $prefixmf* + <url|query>
> Archivo MediaFire.
✦ *$prefixplay » $prefixmp3 » $prefixplayaudio » $prefixytaudio » $prefixytmp3* + <url|query>
> Música YT.
✦ *$prefixpinterest » $prefixpin* + <url|query>
> Imágenes Pinterest.
✦ *$prefixplay2 » $prefixmp4 » $prefixplayvideo » $prefixytvideo » $prefixytmp4* + <url|query>
> Video YT.
✦ *$prefixreel » $prefixig » $prefixinstagram* + <url>
> Reel IG.
✦ *$prefixtiktok » $prefixtt* + <url|query>
> Video TikTok.
✦ *$prefixtwitter » $prefixx* + <url>
> Video/Imagen Twitter.
✦ *$prefixytsearch » $prefixsearch* + <query>
> Búsqueda YT.
✦ *$prefiximagen » $prefiximg* + <query>
> Imágenes Google.
✦ *$prefixaptoide » $prefixapk » $prefixapkdl* + <query>
> APK Aptoide.
╰═✧═╮ ❖ DESCARGAS ❖ ╰═✧═╯`,
  nsfw: `╭═✧═╯ ❖ NSFW ❖ ╰═✧═╮
> ✐ Contenido para adultos (usa responsibly).
✦ *$prefixxnxx* + _<query|url>_
> Videos XNXX.
✦ *$prefixxvideos* + _<query|url>_
> Videos XVideos.
✦ *$prefixdanbooru » $prefixdbooru* + _<tag>_
> Imágenes Danbooru.
✦ *$prefixgelbooru » $prefixgbooru* + _<tag>_
> Imágenes Gelbooru.
✦ *$prefixrule34 » $prefixr34* + _<tag>_
> Rule34 imágenes.
✦ *$prefixblowjob » $prefixbj* + _<mention>_
> BJ acción.
✦ *$prefixboobjob* + _<mention>_
> Boobjob acción.
✦ *$prefixcum* + _<mention>_
> Cum acción.
✦ *$prefixfap » $prefixpaja* + _<mention>_
> Fap acción.
✦ *$prefixanal* + _<mention>_
> Anal acción.
✦ *$prefixgrabboobs* + _<mention>_
> Grabboobs acción.
✦ *$prefixfootjob* + _<mention>_
> Footjob acción.
✦ *$prefixgrope* + _<mention>_
> Grope acción.
✦ *$prefixundress » $prefixencuerar* + _<mention>_
> Undress acción.
✦ *$prefixsixnine » $prefix69* + _<mention>_
> 69 acción.
✦ *$prefixlickpussy* + _<mention>_
> Lickpussy acción.
✦ *$prefixspank » $prefixnalgada* + _<mention>_
> Spank acción.
✦ *$prefixfuck » $prefixcoger* + _<mention>_
> Fuck acción.
✦ *$prefixsuckboobs* + _<mention>_
> Suckboobs acción.
╰═✧═╮ ❖ NSFW ❖ ╰═✧═╯`,
  profile: `╭═✧═╯ ❖ PERFIL ❖ ╰═✧═╮
> ✐ Personaliza y ve perfiles en MAKI.
✦ *$prefixprofile » $prefixperfil* + <mention>
> Ver perfil.
✦ *$prefixleaderboard » $prefixlboard » $prefixlb* + <page>
> Top experiencia.
✦ *$prefixlevel » $prefixlvl* + <mention>
> Nivel/XP.
✦ *$prefixsetgenre* + <hombre|mujer>
> Género.
✦ *$prefixdelgenre*
> Borra género.
✦ *$prefixsetbirth* + <dia/mes/año|mes/dia>
> Cumpleaños.
✦ *$prefixdelbirth*
> Borra cumpleaños.
✦ *$prefixsetdescription » $prefixsetdesc* + <text>
> Descripción.
✦ *$prefixdeldescription » $prefixdeldesc*
> Borra descripción.
✦ *$prefixmarry » $prefixcasarse* <mention>
> Casarse.
✦ *$prefixdivorce*
> Divorcio.
✦ *$prefixsetfavourite » $prefixsetfav* + <waifu>
> Fav claim.
✦ *$prefixdeletefav » $prefixdelfav* + <waifu>
> Borra fav.
✦ *$prefixsetpasatiempo » $prefixsethobby* 
> Hobby.
✦ *$prefixdelpasatiempo » $prefixremovehobby*
> Borra hobby.
╰═✧═╮ ❖ PERFIL ❖ ╰═✧═╯`,
  sockets: `╭═✧═╯ ❖ SOCKETS ❖ ╰═✧═╮
> ✐ Configura tu bot personalizado.
✦ *$prefixbotinfo » $prefixinfobot*
> Info bot.
✦ *$prefixjoin* + <link>
> Une a grupo.
✦ *$prefixleave » $prefixsalir*
> Sal de grupo.
✦ *$prefixlogout*
> Cierra sesión.
✦ *$prefixself* + <on|off>
> Privado/público.
✦ *$prefixqr » $prefixcode*
> Crea sub-bot.
✦ *$prefixreload*
> Recarga sesión.
✦ *$prefixsetname » $prefixsetbotname*  + <corto / largo>
> Cambia nombre.
✦ *$prefixsetbanner » setbotbanner*
> Banner menú.
✦ *$prefixseticon » $prefixsetboticon*
> Icon bot.
✦ *$prefixsetprefix » $prefixsetbotprefix* + <value>
> Prefijo.
✦ *$prefixsetcurrency » $prefixsetbotcurrency* + <value>
> Moneda.
✦ *$prefixsetowner » $prefixsetbotowner* + <mention|number>
> Dueño.
✦ *$prefixsetchannel » $prefixsetbotchannel* + <link>
> Canal.
✦ *$prefixsetpfp » $prefixsetimage*
> Foto perfil.
✦ *setstatus* + <value>
> Estado.
✦ *setusername* + <value>
> Nombre usuario.
╰═✧═╮ ❖ SOCKETS ❖ ╰═✧═╯`,
};