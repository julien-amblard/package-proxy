/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly clean folderProxy_dest proxy", () => {
  test("should have delete folderProxy_dest folder", () => {
    expect(fs.existsSync(base + "folderProxy_dest")).toBe(false)
  })
})
