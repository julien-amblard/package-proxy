/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly clean folderProxyA proxy", () => {
  test("should have delete folderProxyA folder", () => {
    expect(fs.existsSync(base + "folderProxyA")).toBe(false)
  })
})
