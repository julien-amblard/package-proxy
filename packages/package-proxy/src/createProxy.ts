/** @format */

import chalk from "chalk"
import { Settings } from "./types"
import { writeTemplate } from "./templates/writeTemplate"
import {
  writeFile,
  buildPath,
  getPath,
  cleanExt,
  findFiles,
  filterIndex,
  filterJSON,
} from "./utils"

export const createProxy = (settings: Settings): void => {
  findFiles(settings)
    .filter(filterIndex)
    .filter(filterJSON)
    .forEach(fileName => {
      const cleanedFileName = cleanExt({
        name: fileName,
        proxyType: settings.proxyType,
      })
      const destPath = getPath([settings.dest, cleanedFileName])
      buildPath(destPath)

      const data = writeTemplate({
        name: cleanedFileName,
        dest: destPath,
        settings,
      })

      writeFile(data, destPath, () => {
        console.log(
          `${chalk.bold.green(cleanedFileName)} ${chalk.italic(
            "package proxy created"
          )} 🎉`
        )
      })
    })
}
