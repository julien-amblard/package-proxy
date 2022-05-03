/** @format */
import fs from "fs"

const base = __dirname + "/../../deepFolder/"
describe("should have correctly create deepFolderA proxy from deep/folder", () => {
  test("should have create deepFolderA folder", () => {
    expect(fs.existsSync(base + "deepFolderA")).toBe(true)
  })
  test("should have create package.json in deepFolderA folder", () => {
    expect(fs.existsSync(base + "deepFolderA/package.json")).toBe(true)
  })
  test("should have create package.json with correct content", async () => {
    const file = await fs.readFileSync(
      base + "deepFolderA/package.json",
      "utf8"
    )
    expect(JSON.parse(file)).toEqual({
      main: "../../lib/deep/folder/deepFolderA/index.js",
      module: "../../esm/deep/folder/deepFolderA/index.js",
      name: "consumer/deepFolder/deepFolderA",
      private: true,
      types: "../../lib/deep/folder/deepFolderA/index.d.ts",
    })
  })
})

describe("should have correctly create deepFolderB proxy from deep/folder", () => {
  test("should have create deepFolderB folder", () => {
    expect(fs.existsSync(base + "deepFolderB")).toBe(true)
  })
  test("should have create package.json in deepFolderB folder", () => {
    expect(fs.existsSync(base + "deepFolderB/package.json")).toBe(true)
  })
  test("should have create package.json with correct content", async () => {
    const file = await fs.readFileSync(
      base + "deepFolderB/package.json",
      "utf8"
    )
    expect(JSON.parse(file)).toEqual({
      main: "../../lib/deep/folder/deepFolderB/index.js",
      module: "../../esm/deep/folder/deepFolderB/index.js",
      name: "consumer/deepFolder/deepFolderB",
      private: true,
      types: "../../lib/deep/folder/deepFolderB/index.d.ts",
    })
  })
})
