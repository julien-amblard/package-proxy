/** @format */
import fs from "fs"

const base = __dirname + "/../../customLibAndCustomTypes/"
describe("should have correctly create folderProxyA proxy with custom lib dest and types", () => {
  test("should have create folderProxyA folder", () => {
    expect(fs.existsSync(base + "folderProxyA")).toBe(true)
  })
  test("should have create package.json in folderProxyA folder", () => {
    expect(fs.existsSync(base + "folderProxyA/package.json")).toBe(true)
  })
  test("should have create package.json with correct content", async () => {
    const file = await fs.readFileSync(
      base + "folderProxyA/package.json",
      "utf8"
    )
    expect(JSON.parse(file)).toEqual({
      main: "../../_lib/folderProxy/folderProxyA/index.js",
      module: "../../esm/folderProxy/folderProxyA/index.js",
      name: "consumer/customLibAndCustomTypes/folderProxyA",
      private: true,
      types: "../../types/folderProxy/folderProxyA/index.d.js",
    })
  })
})

describe("should have correctly create folderProxyB proxy with custom lib dest and types", () => {
  test("should have create folderProxyB folder", () => {
    expect(fs.existsSync(base + "folderProxyB")).toBe(true)
  })
  test("should have create package.json in folderProxyB folder", () => {
    expect(fs.existsSync(base + "folderProxyB/package.json")).toBe(true)
  })
  test("should have create package.json with correct content", async () => {
    const file = await fs.readFileSync(
      base + "folderProxyB/package.json",
      "utf8"
    )
    expect(JSON.parse(file)).toEqual({
      main: "../../_lib/folderProxy/folderProxyB/index.js",
      module: "../../esm/folderProxy/folderProxyB/index.js",
      name: "consumer/customLibAndCustomTypes/folderProxyB",
      private: true,
      types: "../../types/folderProxy/folderProxyB/index.d.js",
    })
  })
})
