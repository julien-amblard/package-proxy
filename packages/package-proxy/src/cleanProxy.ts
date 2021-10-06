/** @format */

import rimraf from "rimraf"
import { findFiles } from "./utils/findFiles"
import { Settings } from "./types"
import { filterIndex } from "./utils/filters"
import { cleanExt } from "./utils/cleanExt"
import { DEFAULT_SETTINGS } from "./constants"

export const cleanProxy = (settings: Settings): void => {
  const _settings = { ...DEFAULT_SETTINGS, ...settings }
  if (!!settings.dest) rimraf.sync(`./${settings.dest}`)
  else {
    findFiles(settings)
      .filter(filterIndex)
      .forEach(fileName => {
        const cleanedFileName = cleanExt(fileName, _settings.proxyType)
        rimraf.sync(`./${cleanedFileName}`)
      })
  }
}
