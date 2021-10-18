/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly clean filesProxy proxy", () => {
  test("should have delete filesProxy folder", () => {
    expect(fs.existsSync(base + "filesProxy")).toBe(false)
  })
})
