/** @format */

import { cleanExt } from "../cleanExt"

describe("utils/cleanExt", () => {
  test("should return correct string", () => {
    expect(cleanExt("index.js", "file")).toEqual("index")
  })
  test("should return correct string", () => {
    expect(cleanExt("index.test.js", "file")).toEqual("index.test")
  })
  test("should return correct string", () => {
    expect(cleanExt("index", "file")).toEqual("index")
  })

  test("should return correct string", () => {
    expect(cleanExt("index.js", "folder")).toEqual("index.js")
  })
})
