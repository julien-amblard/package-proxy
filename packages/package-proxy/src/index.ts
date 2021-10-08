#!/usr/bin/env node
/** @format */
import { Command } from "commander"
import chalk from "chalk"
import { loadJSON } from "./utils/loadJSON"
import { createProxy } from "./createProxy"
import { cliClean } from "./cleanProxy"

const defaultConfigName = "./pproxy.json"

const program = new Command()
program.showHelpAfterError()
program.name("proxify").usage("write").description(`
  ${chalk.bold("Proxify your packages modules.")}

  Help you to proxify your module in root project.
  So users can do import like this :
    ${chalk.italic('import Foo from "package"')}
  instead of :
    ${chalk.italic('import Foo from "package/lib/foo"')}
    `)

program
  .command("write", { isDefault: true })
  .description("Create your module proxy's")
  .option("-c, --config <path>", "set config path", defaultConfigName)
  .action(options => {
    const { proxify, root = "", ...rest } = loadJSON(options)
    proxify.forEach(toProxify => createProxy({ root, ...rest, ...toProxify }))
  })

program
  .command("clean")
  .description("Clean your module proxy's")
  .option("-c, --config <path>", "set config path", defaultConfigName)
  .action(cliClean)

program.parse(process.argv)
