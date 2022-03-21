/** @format */
import fs from "fs"

export const writeFile = (data: string, dest: string, cb?: () => void) =>
  fs.writeFile(`${dest}/package.json`, data, function (err) {
    /* istanbul ignore next */
    if (err) throw err
    !!cb && cb()
  })
