/** @format */

import chalk from "chalk"
import { DefaultSettings } from "./types"

export const DEFAULT_SETTINGS: DefaultSettings = {
  dest: ".",
  esm: "esm",
  cjs: "lib",
  proxyType: "folder",
}

export const DEFAULT_CONFIG_PATH = "./pproxy.json"

export const PACKAGE_DESC = `
${chalk.bold("Proxify your packages modules.")}
Help you to proxify your module in root project.

So users can do import like this :
${chalk.italic.green('import Foo from "package/foo"')}
instead of :
${chalk.italic.green('import Foo from "package/lib/foo"')}

It help to get rid of barrel files who can lead to tree shacking issues.
`
