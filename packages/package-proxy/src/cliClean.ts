/** @format */

import { cleanProxy } from "./cleanProxy"
import { loadJSON } from "./utils"

export const cliClean = (options: { config: string }) => {
  const { proxify, root = "", ...rest } = loadJSON(options)
  proxify.forEach(toProxify => cleanProxy({ root, ...rest, ...toProxify }))
}
