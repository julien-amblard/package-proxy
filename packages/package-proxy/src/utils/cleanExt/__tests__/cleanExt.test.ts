/** @format */

import { cleanExt } from "../cleanExt"

describe("utils/cleanExt", () => {
  test("should return correct string", () => {
    expect(cleanExt({ name: "index.js", proxyType: "file" })).toEqual("index")
  })
  test("should return correct string", () => {
    expect(cleanExt({ name: "index.test.js", proxyType: "file" })).toEqual(
      "index.test"
    )
  })
  test("should return correct string", () => {
    expect(cleanExt({ name: "index", proxyType: "file" })).toEqual("index")
  })

  test("should return correct string", () => {
    expect(cleanExt({ name: "index.js", proxyType: "folder" })).toEqual(
      "index.js"
    )
  })
})
