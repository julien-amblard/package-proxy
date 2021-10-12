/** @format */

import rimraf from "rimraf"
import fs from "fs"

export const buildPath = (path: string): void => {
  rimraf.sync(path)
  fs.mkdirSync(path, { recursive: true })
}
