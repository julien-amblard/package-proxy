/** @format */
import { Command } from "commander"
import { cliCreate } from "./createProxy"
import { cliClean } from "./cleanProxy"
import { PACKAGE_DESC, DEFAULT_CONFIG_PATH } from "./constants"

const program = new Command()
program.showHelpAfterError()
program.name("proxify").usage("write").description(PACKAGE_DESC)

program
  .command("write", { isDefault: true })
  .description("Create your module proxy's")
  .option("-c, --config <path>", "set config path", DEFAULT_CONFIG_PATH)
  .action(cliCreate)

program
  .command("clean")
  .description("Clean your module proxy's")
  .option("-c, --config <path>", "set config path", DEFAULT_CONFIG_PATH)
  .action(cliClean)

program.parse(process.argv)
