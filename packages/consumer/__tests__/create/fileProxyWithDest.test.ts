/** @format */
import fs from "fs"

const base = __dirname + "/../../filesProxy/"
describe("should have correctly create filesProxyA proxy", () => {
  test("should have create filesProxyA folder", () => {
    expect(fs.existsSync(base + "filesProxyA")).toBe(true)
  })
  test("should have create package.json in filesProxyA folder", () => {
    expect(fs.existsSync(base + "filesProxyA/package.json")).toBe(true)
  })
  test("should have create package.json with correct content", async () => {
    const file = await fs.readFileSync(
      base + "filesProxyA/package.json",
      "utf8"
    )
    expect(JSON.parse(file)).toEqual({
      main: "../../lib/filesProxy/filesProxyA.js",
      name: "consumer/filesProxy/filesProxyA",
      private: true,
      types: "../../lib/filesProxy/filesProxyA.d.js",
    })
  })
})

describe("should have correctly create filesProxyB proxy", () => {
  test("should have create filesProxyB folder", () => {
    expect(fs.existsSync(base + "filesProxyB")).toBe(true)
  })
  test("should have create package.json in filesProxyB folder", () => {
    expect(fs.existsSync(base + "filesProxyB/package.json")).toBe(true)
  })
  test("should have create package.json with correct content", async () => {
    const file = await fs.readFileSync(
      base + "filesProxyB/package.json",
      "utf8"
    )
    expect(JSON.parse(file)).toEqual({
      main: "../../lib/filesProxy/filesProxyB.js",
      name: "consumer/filesProxy/filesProxyB",
      private: true,
      types: "../../lib/filesProxy/filesProxyB.d.js",
    })
  })
})
