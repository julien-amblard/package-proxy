/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly create ComponentA proxy", () => {
  test("should have create ComponentA folder", () => {
    expect(fs.existsSync(base + "ComponentA")).toBe(true)
  })
  test("should have create package.json in ComponentA folder", () => {
    expect(fs.existsSync(base + "ComponentA/package.json")).toBe(true)
  })
  test("should have create package.json with correct content", async () => {
    const file = await fs.readFileSync(base + "ComponentA/package.json", "utf8")
    expect(JSON.parse(file)).toEqual({
      main: "../lib/components/ComponentA/index.js",
      module: "../esm/components/ComponentA/index.js",
      name: "foo/ComponentA",
      private: true,
      types: "../lib/components/ComponentA/index.d.js",
    })
  })
})
