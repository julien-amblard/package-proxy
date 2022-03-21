/** @format */

import rimraf from "rimraf"
import chalk from "chalk"

export const deleteFolder = (dest: string) => {
  rimraf.sync(dest)
  console.log(chalk.green.bold(`${dest} removed`))
}
