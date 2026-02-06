# 𝐌𝐀𝐊𝐈 𝐇𝐀𝐑𝐔𝐊𝐀𝐖𝐀 - Bot para WhatsApp

![Banner del Bot](https://i.pinimg.com/736x/b6/07/ae/b607ae73c96b7147b9578636c1b56000.jpg)

[![Node.js](https://img.shields.io/badge/Node.js-v18+-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Licencia MIT](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)](LICENSE)
[![Canal Oficial](https://img.shields.io/badge/Canal%20WhatsApp-Join%20Now-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsapp.com/channel/0029VbBVZGQ35fM3tALLmF2k)

Bot premium multi-dispositivo para WhatsApp, desarrollado con Node.js y la biblioteca @whiskeysockets/baileys. Ofrece más de 300 comandos funcionales, integración con más de 500 APIs gratuitas, sub-bots avanzados, un menú elegante y opciones de vinculación seguras mediante QR o código de 8 dígitos. Diseñado para ser potente, personalizable y fácil de usar, con un enfoque en la estabilidad y la seguridad.

## Tabla de Contenidos
- [Características Principales](#características-principales)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Soporte](#soporte)

## Características Principales
- **Comandos Extensos**: Más de 300 comandos categorizados en plugins individuales, cubriendo diversión, herramientas, IA, descargas, stickers, juegos, administración de grupos y comandos exclusivos para el owner.
- **Integración de APIs**: Soporte para más de 500 APIs gratuitas, incluyendo catfacts, chistes, clima, Pokémon, criptomonedas y mucho más para enriquecer la experiencia.
- **Menú Elegante**: Interfaz limpia con foto personalizada, lista detallada de comandos y enlace directo al canal oficial. Diseño minimalista sin exceso de emojis para una apariencia profesional.
- **Vinculación Segura**: Escanea un QR o usa un código de 8 dígitos. El rol de owner está restringido al número +57 3107400303 para mayor control y seguridad.
- **Sub-bots Potentes**: Crea instancias secundarias con el comando `.jadibot`, ideales para multi-cuentas o testing.
- **Canal Oficial**: Únete a [nuestro canal de WhatsApp](https://whatsapp.com/channel/0029VbBVZGQ35fM3tALLmF2k) para actualizaciones en tiempo real, soporte comunitario y novedades exclusivas.
- **Modular y Escalable**: Código organizado en carpetas (config, handlers, utils, plugins) para un mantenimiento sencillo y escalabilidad óptima.
- **Anti-Ban y Estabilidad**: Incluye logging detallado y medidas preventivas para minimizar riesgos de bans en WhatsApp.

## Requisitos
- Node.js versión 18 o superior (descárgalo desde [nodejs.org](https://nodejs.org)).
- Una cuenta de WhatsApp activa (recomendamos usar un número secundario para evitar posibles bans).
- Dependencias clave: `@whiskeysockets/baileys`, `figlet`, `readline-sync`, `qrcode-terminal`, `pino`, `node-fetch`, `fs`, `path`. Se instalan automáticamente.

## Instalación
1. **Clona el Repositorio**:  
   ```bash
   git clone https://github.com/makiharukawabot-cmd/makiharukawa-bot
 
2. **Accede al Directorio**:  
   ```bash
   cd maki-harukawa-bot
   ```

3. **Instala las Dependencias**:  
   ```bash
   npm install
   ```

4. **Inicia el Bot**:  
   ```bash
   node Index.js
   ```
   Escanea el QR en la terminal o ingresa el código de 8 dígitos para vincular.

5. **Configuración Inicial**:  
   - Edita `settings.js` para personalizar el prefijo de comandos (por defecto: `.`), el owner y otras opciones.
   - Asegúrate de que el número owner esté configurado para acceder a funciones exclusivas.

## Uso
- Envía `.menu` en WhatsApp para ver la lista completa de comandos.
- Para crear un sub-bot: Usa `.jadibot` y sigue las instrucciones en pantalla.
- Mantente actualizado: Revisa el canal oficial para nuevas versiones, fixes y tips de uso.

![Ejemplo de Menú](https://static.wikia.nocookie.net/danganronpa/images/0/0a/Danganronpa_V3_Maki_Harukawa_Halfbody_Sprite_%281%29.png/revision/latest?cb=20180507094503)  <!-- Puedes agregar screenshots o GIFs aquí para demo -->

## Contribuciones
¡Contribuciones bienvenidas! Si deseas agregar comandos, corregir bugs o mejorar el código:
1. Haz un fork del repositorio.
2. Crea una rama para tu cambio: `git checkout -b feature/nuevo-comando`.
3. Commitea tus cambios: `git commit -m 'Agrego nuevo comando'`.
4. Pushea la rama: `git push origin feature/nuevo-comando`.
5. Abre un Pull Request describiendo tus cambios.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para detalles completos.

## Soporte
¿Problemas? Únete al [canal oficial](https://whatsapp.com/channel/0029VbBVZGQ35fM3tALLmF2k) o abre un issue en GitHub. ¡Gracias por usar Maki Harukawa Bot – el bot premium que eleva tu experiencia en WhatsApp!