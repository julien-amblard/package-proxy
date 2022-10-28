/** @format */
import { DEFAULT_SETTINGS } from "./constants"
import { loadConfigJSON, loadPackageJSON, errorLog } from "./utils"
import { createProxy } from "./createProxy"

export const cliCreate = (options: { config: string }) => {
  const {
    proxify,
    root = "",
    packageName,
    ...rest
  } = loadConfigJSON(options.config)
  const { name: nameFromPackageJson } = loadPackageJSON()

  if (!nameFromPackageJson && !packageName) {
    errorLog(
      "Cannot find package name. It possibly mean we cannot find your package.json file, or the `name` field was not provide. You also can provide the package name in your config file with the `pacakgeName` prop"
    )
    return
  }

  if (!Array.isArray(proxify) || proxify.length === 0) {
    errorLog('"proxify" is missing or is empty in config file')
    return
  }

  proxify.forEach(toProxify => {
    if (typeof toProxify.src !== "undefined") {
      errorLog('"proxify[x].src" is missing or is empty in config file')
      return
    }
    createProxy({
      ...DEFAULT_SETTINGS,
      root,
      packageName: (packageName || nameFromPackageJson) as string,
      ...rest,
      ...toProxify,
    })
  })
}
