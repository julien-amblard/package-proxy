/** @format */

import { Command } from "commander"
import { loadJSON } from "./utils/loadJSON"
import { createProxy } from "./createProxy"
import { cleanProxy } from "./cleanProxy"

const defaultConfigName = "./pproxy.json"

const program = new Command()
program.showHelpAfterError()
program.usage("proxify --write").description("Proxify your packages")

program
  .command("write", { isDefault: true })
  .description("write your proxys")
  .option("-c, --config <path>", "set config path", defaultConfigName)
  .action(options => {
    const { proxify, root = "", ...rest } = loadJSON(options)
    proxify.forEach(toProxify => createProxy({ root, ...rest, ...toProxify }))
  })

program
  .command("clean")
  .description("clean your proxys")
  .option("-c, --config <path>", "set config path", defaultConfigName)
  .action(options => {
    const { proxify, root = "", ...rest } = loadJSON(options)
    proxify.forEach(toProxify => cleanProxy({ root, ...rest, ...toProxify }))
  })

program.parse(process.argv)
