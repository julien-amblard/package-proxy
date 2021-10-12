/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly clean ComponentA proxy", () => {
  test("should have delete ComponentA folder", () => {
    expect(fs.existsSync(base + "ComponentA")).toBe(false)
  })
})
