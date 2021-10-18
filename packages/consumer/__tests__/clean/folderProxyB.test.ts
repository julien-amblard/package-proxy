/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly clean folderProxyB proxy", () => {
  test("should have delete folderProxyB folder", () => {
    expect(fs.existsSync(base + "folderProxyB")).toBe(false)
  })
})
