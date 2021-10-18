/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly clean deepFolder proxy", () => {
  test("should have delete deepFolder folder", () => {
    expect(fs.existsSync(base + "deepFolder")).toBe(false)
  })
})
