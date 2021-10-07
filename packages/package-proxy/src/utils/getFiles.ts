/** @format */

import * as fs from "fs"

export const getFiles = (source: string, excludes: string[] = []): string[] => {
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => !excludes.includes(dirent.name))
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => dirent.name)
}
