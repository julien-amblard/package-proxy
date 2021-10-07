/** @format */

import { writeFile } from "../writeFile"
import fs from "fs"
import rimraf from "rimraf"

const timestamp = Date.now()
const content = "foo " + timestamp
const data = JSON.stringify({ foo: content })
const fileName = "fileName"
const dest = __dirname + "/mocks/writeTest"
const cb = jest.fn()
describe("utils/writeFile", () => {
  rimraf.sync(dest + "/package.json")
  writeFile(data, fileName, dest, cb)

  test("should have write pacakge.json file with correct content", () => {
    setTimeout(() => {
      const file = fs.readFileSync(dest + "/package.json", "utf8")
      expect(file).toEqual(data)
    }, 100)
  })
})
