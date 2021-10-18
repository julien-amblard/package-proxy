/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly clean filesProxyA proxy", () => {
  test("should have delete filesProxyA folder", () => {
    expect(fs.existsSync(base + "filesProxyA")).toBe(false)
  })
})
