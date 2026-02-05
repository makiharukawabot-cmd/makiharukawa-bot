# 𝐌𝐀𝐊𝐈 𝐇𝐀𝐑𝐔𝐊𝐀𝐖𝐀 - Bot Premium para WhatsApp

Bot premium multi-dispositivo para WhatsApp, desarrollado con Node.js y la biblioteca @whiskeysockets/baileys. Ofrece más de 300 comandos funcionales, integración con más de 500 APIs, sub-bots avanzados, un menú elegante y opciones de vinculación seguras mediante QR o código de 8 dígitos.

## Características Principales
- **Comandos Extensos**: Más de 300 comandos categorizados en plugins individuales, incluyendo diversión, herramientas, IA, descargas, stickers, juegos, administración de grupos y comandos exclusivos para el owner.
- **Integración de APIs**: Soporte para más de 500 APIs gratuitas, como catfacts, chistes, clima, Pokémon, criptomonedas y mucho más.
- **Menú Elegante**: Interfaz con foto personalizada, lista de comandos detallada y enlace directo al canal oficial. Diseño limpio sin exceso de emojis.
- **Vinculación Segura**: Opciones para escanear QR o usar un código de 8 dígitos. El rol de owner está restringido al número +57 3107400303 para mayor seguridad.
- **Sub-bots Potentes**: Usa el comando `.jadibot` para crear instancias secundarias con funcionalidades completas.
- **Canal Oficial**: Únete a [nuestro canal de WhatsApp](https://whatsapp.com/channel/0029VbBVZGQ35fM3tALLmF2k) para actualizaciones, soporte y novedades.
- **Diseño Modular**: Código organizado en carpetas (config, handlers, utils, plugins) para un mantenimiento sencillo y escalabilidad óptima.
- **Multi-Dispositivo**: Compatible con la versión multi-device de WhatsApp, permitiendo sesiones simultáneas sin problemas.
- **Seguridad y Estabilidad**: Incluye medidas anti-ban y logging detallado para un funcionamiento confiable.

## Requisitos
- Node.js versión 18 o superior (descárgalo desde [nodejs.org](https://nodejs.org)).
- Una cuenta de WhatsApp activa (recomendamos no usar tu número principal para evitar posibles bans).
- Dependencias clave: `@whiskeysockets/baileys`, `figlet`, `readline-sync`, `qrcode-terminal`, `pino`, `node-fetch`, `fs`, `path`. Estas se instalarán automáticamente durante la configuración.

## Instalación
1. **Clona el Repositorio**:  
   ```bash
   git clone https://github.com/tu-usuario/maki-harukawa-bot.git
   ```
   (Reemplaza con la URL real de tu repositorio).

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
   node .
   ```
   Escanea el código QR que aparecerá en la terminal o usa el código de vinculación de 8 dígitos.

5. **Configuración Inicial**:  
   - Edita el archivo `config.js` si necesitas personalizar opciones como el prefijo de comandos (por defecto: `.`).
   - Asegúrate de que el número owner esté configurado correctamente para acceder a comandos exclusivos.

## Uso
- Envía `.menu` en WhatsApp para ver la lista completa de comandos.
- Para crear un sub-bot: Usa `.jadibot` y sigue las instrucciones.
- Actualizaciones: Revisa el canal oficial regularmente para nuevas versiones y fixes.

## Contribuciones
¡Bienvenidas! Si quieres agregar comandos, corregir bugs o mejorar el código:
1. Haz un fork del repositorio.
2. Crea una rama para tu feature: `git checkout -b feature/nuevo-comando`.
3. Commitea tus cambios: `git commit -m 'Agrego nuevo comando'`.
4. Pushea la rama: `git push origin feature/nuevo-comando`.
5. Abre un Pull Request.

## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Soporte
Si encuentras problemas, únete al [canal oficial](https://whatsapp.com/channel/0029VbBVZGQ35fM3tALLmF2k) o abre un issue en el repositorio. ¡Gracias por usar Maki Harukawa Bot!