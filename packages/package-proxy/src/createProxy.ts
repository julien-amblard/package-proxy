/** @format */

import chalk from "chalk"
import { Settings } from "./types"
import { DEFAULT_SETTINGS } from "./constants"
import { writeTemplate } from "./templates/writeTemplate"
import { filterIndex, filterJSON } from "./utils/filters"
import { findFiles } from "./utils/findFiles"
import { cleanExt } from "./utils/cleanExt"
import { buildPath, getPath } from "./utils/buildPath"
import { writeFile } from "./utils/writeFile"
import { loadJSON } from "./utils/loadJSON"

export const createProxy = (settings: Settings): void => {
  const _settings = { ...DEFAULT_SETTINGS, ...settings }

  findFiles(_settings)
    .filter(filterIndex)
    .filter(filterJSON)
    .forEach(fileName => {
      const cleanedFileName = cleanExt(fileName, _settings.proxyType)
      const destPath = getPath([_settings.dest, cleanedFileName])
      buildPath(destPath)

      const data = writeTemplate({
        name: cleanedFileName,
        dest: destPath,
        settings: _settings,
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

export const cliCreate = (options: { config: string }) => {
  const { proxify, root = "", ...rest } = loadJSON(options)
  proxify.forEach(toProxify => createProxy({ root, ...rest, ...toProxify }))
}
