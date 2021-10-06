/** @format */

import * as fs from "fs"

export const getFiles = (source: string): string[] => {
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => dirent.name)
}
