/** @format */
import fs from "fs"

const base = __dirname + "/../../"
describe("should have correctly some other proxy proxy", () => {
  test("should have delete customEsm folder", () => {
    expect(fs.existsSync(base + "customEsm")).toBe(false)
  })
  test("should have delete customLib folder", () => {
    expect(fs.existsSync(base + "customLib")).toBe(false)
  })
  test("should have delete customLibAndCustomTypes folder", () => {
    expect(fs.existsSync(base + "customLibAndCustomTypes")).toBe(false)
  })
})

describe("should still have esm, lib, src", () => {
  test("should not have delete esm folder", () => {
    expect(fs.existsSync(base + "esm")).toBe(true)
  })
  test("should not have delete lib folder", () => {
    expect(fs.existsSync(base + "lib")).toBe(true)
  })
  test("should not have delete src folder", () => {
    expect(fs.existsSync(base + "src")).toBe(true)
  })
  test("should not have delete node_modules folder", () => {
    expect(fs.existsSync(base + "node_modules")).toBe(true)
  })
})
