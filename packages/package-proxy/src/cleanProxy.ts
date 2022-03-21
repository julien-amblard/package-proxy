/** @format */

import { CleanSettings } from "./types"
import { deleteFolder, findFiles, filterIndex, cleanExt } from "./utils"
import { DEFAULT_SETTINGS } from "./constants"

const hightestFolder = (path: string) => path.split("/")[0]

export const cleanProxy = (settings: CleanSettings): void => {
  if (!!settings.dest) deleteFolder(`./${hightestFolder(settings.dest)}`)
  else {
    const _settings = { ...DEFAULT_SETTINGS, ...settings }
    const { proxyType, src, root, ignore } = settings
    findFiles({ proxyType, src, root, ignore })
      .filter(filterIndex)
      .map(
        file => `./${cleanExt({ name: file, proxyType: _settings.proxyType })}`
      )
      .forEach(deleteFolder)
  }
}
