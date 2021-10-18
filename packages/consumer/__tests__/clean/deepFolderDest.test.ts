/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly clean deep proxy", () => {
  test("should have delete deep folder", () => {
    expect(fs.existsSync(base + "deep")).toBe(false)
  })
})
