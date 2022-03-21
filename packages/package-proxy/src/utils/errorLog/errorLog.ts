/** @format */
import chalk from "chalk"

export const errorLog = (message: string) =>
  console.error(`${chalk.bold.underline.red("package-proxy error")}
${chalk.red(message)}
${chalk.red("Please run `proxify --help.`")}
`)
