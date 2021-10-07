/** @format */

import { getFiles } from "../getFiles"

const source = __dirname + "/../../mocks/findDirAndFileTest"
const ignore = ["zat.txt", "taz.txt"]

describe("utils/getFiles", () => {
  test("should be return correct files", () => {
    const data = getFiles(source)
    expect(data).toEqual(["tar.txt", "taz.txt"])
  })
  test("should be return correct files with ignore", () => {
    const data = getFiles(source, ignore)
    expect(data).toEqual(["tar.txt"])
  })
})
