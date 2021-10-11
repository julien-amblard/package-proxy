/** @format */

import { CleanSettings } from "./types"
import { deleteFolder, findFiles, filterIndex, cleanExt } from "./utils"
import { DEFAULT_SETTINGS } from "./constants"

export const cleanProxy = (settings: CleanSettings): void => {
  if (!!settings.dest) deleteFolder(`./${settings.dest}`)
  else {
    const _settings = { ...DEFAULT_SETTINGS, ...settings }
    findFiles(_settings)
      .filter(filterIndex)
      .map(file => `./${cleanExt(file, _settings.proxyType)}`)
      .forEach(deleteFolder)
  }
}
