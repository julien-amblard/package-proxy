/** @format */

import fs from "fs"
import { PackageJson } from "type-fest"
import { JSONConfig } from "../../types"

export const loadJSON = (path: string): string => {
  try {
    const loadedFile = fs.readFileSync(path, "utf8")
    return loadedFile
  } catch (err) {
    throw err
  }
}

export const loadConfigJSON = (path: string): JSONConfig => {
  const file = loadJSON(path)
  return JSON.parse(file) as JSONConfig
}

export const loadPackageJSON = (): PackageJson => {
  const file = loadJSON("./package.json")
  return JSON.parse(file) as PackageJson
}
