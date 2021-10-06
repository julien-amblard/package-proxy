/** @format */
import fs from "fs"

export const writeFile = (
  data: string,
  filename: string,
  dest: string,
  cb: () => void
) =>
  fs.writeFile(`${dest}/package.json`, data, function (err) {
    if (err) {
      console.log(filename)
      throw err
    }
    !!cb && cb()
  })
