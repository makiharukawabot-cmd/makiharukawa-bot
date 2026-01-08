# MAKI HARUKAWA - WhatsApp Bot (Baileys, JavaScript)

Este repositorio contiene el scaffold inicial del bot de WhatsApp "MAKI HARUKAWA" usando Baileys (WhatsApp Web) en JavaScript.

Características principales
- Conexión: Baileys (WhatsApp Web) con persistencia de sesión en `./session.json`.
- Prefijo de comandos: `#`.
- Owner: +57 3107400303 (privilegios owner).
- Sistema de vinculación: Código QR y código de 8 dígitos temporal (expira en 5 minutos).
- Estructura de comandos: cada comando en un archivo dentro de `commands/`.
- Script para generar 300 comandos-esqueleto: `npm run gen-commands`.
- Dockerfile y guía para despliegue local / producción (Docker + MongoDB Atlas recomendado).

Archivos y carpetas importantes
- src/: código fuente (Baileys init, servidor Express, manejador de comandos, utilidades)
- commands/: comandos individuales (25 implementados + plantillas)
- commands/generate_commands.js: script para generar 300 archivos-esqueleto
- .env.example: variables de entorno (placeholders)
- session.json: archivo donde se persisten las credenciales de Baileys (generado en runtime)

Requisitos
- Node.js 16+ (recomendado 18+)
- npm
- (Opcional) Docker y Docker Compose

Instalación y ejecución local
1. Clona el repo:
   git clone https://github.com/makiharukawabot-cmd/makiharukawa-bot.git
2. Entra al directorio:
   cd makiharukawa-bot
3. Copia el archivo de ejemplo de variables de entorno:
   cp .env.example .env
   Rellena las variables en `.env` (todas son placeholders por seguridad).
4. Instala dependencias:
   npm install
5. Ejecuta en modo desarrollo (nodemon):
   npm run dev
6. Abre el servidor web en http://localhost:PORT (por defecto PORT en .env o 3000). Sigue las instrucciones para escanear el QR y vincular.

Generar 300 comandos-esqueleto
- Ejecuta: `npm run gen-commands`. Esto creará 300 archivos `cmd001.js` ... `cmd300.js` dentro de `commands/`.

Vinculación mediante código de 8 dígitos
- El bot genera códigos temporales de 8 dígitos que expiran en 5 minutos. Úsalos desde la interfaz o mediante el comando `/code8`.

Seguridad y claves
- No incluyas claves reales en el repositorio. Usa `.env` para almacenar claves (OpenAI, APIs, MongoDB, etc.).
- Todas las variables sensibles están en `.env.example` como `REPLACE_ME`.

Despliegue con Docker (sugerencia)
- Construye la imagen y ejecuta con Docker. Para producción recomendamos usar MongoDB Atlas y desplegar en VPS o servicios de contenedores.

Soporte
- Owner / Admin: +57 3107400303

Licencia
- MIT

---

Nota: Este es el commit inicial con la estructura y archivos básicos. Ejecuta `npm run gen-commands` para generar los 300 comandos-esqueleto.
