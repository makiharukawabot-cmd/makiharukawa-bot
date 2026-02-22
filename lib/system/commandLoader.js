import fs from "fs"
import path from "path"
import chalk from "chalk"
import { fileURLToPath, pathToFileURL } from "url"
import { parse } from "@babel/parser"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
global.comandos = new Map()
global.plugins = {}
const commandsFolder = path.join(__dirname, "../../commands")

async function seeCommands(dir = commandsFolder) {
  console.log(chalk.blue(`Buscando comandos en carpeta: ${dir}`)); // Log para debug
  const items = fs.readdirSync(dir)
  for (const fileOrFolder of items) {
    const fullPath = path.join(dir, fileOrFolder)
    if (fs.lstatSync(fullPath).isDirectory()) {
      await seeCommands(fullPath)
      continue
    }
    if (!fileOrFolder.endsWith(".js")) continue
    console.log(chalk.yellow(`Cargando archivo: ${fileOrFolder}`)); // Log para debug
    const code = fs.readFileSync(fullPath)
    try {
      parse(code.toString(), {
        sourceType: "module",
        plugins: ["topLevelAwait"]
      })
    } catch (err) {
      console.error(chalk.red(`❌ Error de sintaxis en ${fileOrFolder}: ${err.message}`))
      continue
    }

    try {
      // crear file:// URL y bustear cache con ?update=timestamp
      const modulePath = pathToFileURL(path.resolve(fullPath)).href + `?update=${Date.now()}`
      const imported = await import(modulePath)
      const comando = imported.default
      const pluginName = fileOrFolder.replace(".js", "")
      global.plugins[pluginName] = imported
      if (!comando?.command || typeof comando.run !== "function") {
        console.log(chalk.red(`❌ Archivo ${fileOrFolder} no tiene 'command' o 'run' válido.`)); // Log para debug
        continue
      }
      comando.command.forEach(cmd => {
        global.comandos.set(cmd.toLowerCase(), {
          pluginName,
          run: comando.run,
          category: comando.category || "uncategorized",
          isOwner: comando.isOwner || false,
          isAdmin: comando.isAdmin || false,
          botAdmin: comando.botAdmin || false,
          before: imported.before || null,
          after: imported.after || null,
          info: comando.info || {}
        })
      })
      console.log(chalk.green(`✅ Comando cargado: ${comando.command.join(', ')} de ${fileOrFolder}`)); // Log para debug
    } catch (e) {
      console.error(chalk.red(`❌ Error en el plugin ${fileOrFolder}:`), e)
    }
  }
}

globalThis.reload = async (_ev, filename) => {
  if (!filename || !filename.endsWith(".js")) return
  const fullPath = path.join(commandsFolder, filename)
  if (!fs.existsSync(fullPath)) {
    console.log(chalk.yellow(`⚠ Plugin eliminado: ${filename}`))
    delete global.plugins[filename.replace(".js", "")]
    return
  }
  const code = fs.readFileSync(fullPath)
  try {
    parse(code.toString(), {
      sourceType: "module",
      plugins: ["topLevelAwait"]
    })
  } catch (err) {
    console.error(chalk.red(`❌ Error de sintaxis en '${filename}': ${err.message}`))
    return
  }

  try {
    const modulePath = pathToFileURL(path.resolve(fullPath)).href + `?update=${Date.now()}`
    const imported = await import(modulePath)
    global.plugins[filename.replace(".js", "")] = imported
    global.comandos.clear()
    await seeCommands()
  } catch (e) {
    console.error(chalk.red(`❌ Error al recargar ${filename}:\n`), e)
  }
}

Object.freeze(globalThis.reload)
fs.watch(commandsFolder, (event, filename) => {
  if (filename) globalThis.reload(event, filename)
})

export default seeCommands

// NOTA: estos logs se ejecutarán inmediatamente al importar el módulo.
// si prefieres que aparezcan sólo después de cargar, muévelos al lugar donde llamas a seeCommands()
console.log(`Comandos cargados: ${global.comandos.size}`);
global.comandos.forEach((value, key) => console.log(`Comando: ${key}`));