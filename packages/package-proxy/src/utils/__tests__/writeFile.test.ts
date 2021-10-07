/** @format */

import { writeFile } from "../writeFile"
import fs from "fs"
import rimraf from "rimraf"

const timestamp = Date.now()
const content = "foo " + timestamp
const data = JSON.stringify({ foo: content })
const dest = __dirname + "/../../mocks/writeTest"
const cb = jest.fn()

const asyncWrite = () =>
  new Promise(resolve => {
    rimraf.sync(dest + "/package.json")
    writeFile(data, dest, cb)
    setTimeout(resolve, 100)
  })

describe("utils/writeFile", () => {
  test("should have write pacakge.json file with correct content", async () => {
    await asyncWrite()
    const file = fs.readFileSync(dest + "/package.json", "utf8")
    expect(file).toEqual(data)
  })
  test("should have call callback", async () => {
    cb.mockReset()
    await asyncWrite()
    expect(cb).toHaveBeenCalledTimes(1)
  })
})
