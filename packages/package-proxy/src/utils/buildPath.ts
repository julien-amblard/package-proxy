/** @format */

import rimraf from "rimraf"
import fs from "fs"
import { filterTruthy } from "./filters"

export const getPath = (path: string[]): string =>
  path.filter(filterTruthy).join("/")

export const buildPath = (path: string): void => {
  rimraf.sync(path)
  fs.mkdirSync(path, { recursive: true })
}
