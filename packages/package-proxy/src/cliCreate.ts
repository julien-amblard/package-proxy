/** @format */
import { DEFAULT_SETTINGS } from "./constants"
import { loadJSON, errorLog } from "./utils"
import { createProxy } from "./createProxy"

export const cliCreate = (options: { config: string }) => {
  const { proxify, root = "", ...rest } = loadJSON(options)

  if (!rest.packageName) {
    errorLog('"packageName" is missing in config file')
    return
  }

  if (!Array.isArray(proxify) || proxify.length === 0) {
    errorLog('"proxify" is missing or is empty in config file')
    return
  }

  proxify.forEach(toProxify => {
    if (!toProxify.src) {
      errorLog('"proxify[x].src" is missing or is empty in config file')
      return
    }
    createProxy({ ...DEFAULT_SETTINGS, root, ...rest, ...toProxify })
  })
}
