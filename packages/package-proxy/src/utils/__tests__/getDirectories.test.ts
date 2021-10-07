/** @format */

import { getDirectories } from "../getDirectories"

const source = __dirname + "/../../mocks/findDirAndFileTest"
const ignore = ["foo", "oof"]

describe("utils/getDirectories", () => {
  test("should be return correct folders", () => {
    const data = getDirectories(source)
    expect(data).toEqual(["bar", "baz", "foo"])
  })
  test("should be return correct folders with ignore", () => {
    const data = getDirectories(source, ignore)
    expect(data).toEqual(["bar", "baz"])
  })
})
