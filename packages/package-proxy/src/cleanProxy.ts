/** @format */

import rimraf from "rimraf"
import { findFiles } from "./utils/findFiles"
import { Settings } from "./types"
import { filterIndex } from "./utils/filters"
import { cleanExt } from "./utils/cleanExt"
import { loadJSON } from "./utils/loadJSON"
import { DEFAULT_SETTINGS } from "./constants"
import chalk from "chalk"

export const deleteFolder = (dest: string) => {
  rimraf.sync(dest)
  console.log(chalk.green.bold(`${dest} removed`))
}

export const cleanProxy = (settings: Settings): void => {
  if (!!settings.dest) deleteFolder(`./${settings.dest}`)
  else {
    const _settings = { ...DEFAULT_SETTINGS, ...settings }
    findFiles(_settings)
      .filter(filterIndex)
      .map(file => `./${cleanExt(file, _settings.proxyType)}`)
      .forEach(deleteFolder)
  }
}

export const cliClean = (options: { config: string }) => {
  const { proxify, root = "", ...rest } = loadJSON(options)
  proxify.forEach(toProxify => cleanProxy({ root, ...rest, ...toProxify }))
}
