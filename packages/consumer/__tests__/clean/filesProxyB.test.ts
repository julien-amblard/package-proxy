/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly clean filesProxyB proxy", () => {
  test("should have delete filesProxyB folder", () => {
    expect(fs.existsSync(base + "filesProxyB")).toBe(false)
  })
})
