/** @format */

import fs from "fs"
import { JSONConfig } from "types"

export const loadJSON = ({ config: path }: { config: string }): JSONConfig => {
  try {
    const loadedConfig = fs.readFileSync(path, "utf8")
    return JSON.parse(loadedConfig) as JSONConfig
  } catch (err) {
    throw err
  }
}
