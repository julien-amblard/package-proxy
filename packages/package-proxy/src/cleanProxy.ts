/** @format */

import rimraf from "rimraf"
import { findFiles } from "./utils/findFiles"
import { Settings } from "./types"
import { filterIndex } from "./utils/filters"
import { cleanExt } from "./utils/cleanExt"
import { loadJSON } from "./utils/loadJSON"
import { DEFAULT_SETTINGS } from "./constants"
import chalk from "chalk"

const logIt = (file: string) => console.log(chalk.green.bold(`${file} removed`))

export const cleanProxy = (settings: Settings): void => {
  const _settings = { ...DEFAULT_SETTINGS, ...settings }

  if (!!settings.dest) {
    rimraf.sync(`./${settings.dest}`)
    logIt(settings.dest)
  } else {
    findFiles(settings)
      .filter(filterIndex)
      .forEach(fileName => {
        const cleanedFileName = cleanExt(fileName, _settings.proxyType)
        rimraf.sync(`./${cleanedFileName}`)
        logIt(fileName)
      })
  }
}

export const cliClean = (options: { config: string }) => {
  const { proxify, root = "", ...rest } = loadJSON(options)
  proxify.forEach(toProxify => cleanProxy({ root, ...rest, ...toProxify }))
}
