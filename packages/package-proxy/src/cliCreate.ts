/** @format */

import { DEFAULT_SETTINGS } from "./constants"
import { loadJSON } from "./utils"
import { createProxy } from "./createProxy"

export const cliCreate = (options: { config: string }) => {
  const { proxify, root = "", ...rest } = loadJSON(options)
  proxify.forEach(toProxify =>
    createProxy({ ...DEFAULT_SETTINGS, root, ...rest, ...toProxify })
  )
}
