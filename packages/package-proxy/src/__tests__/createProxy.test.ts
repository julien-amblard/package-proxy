/** @format */

const mockWriteFile = jest.fn()
jest.mock("../utils/writeFile", () => ({
  __esModule: true,
  writeFile: mockWriteFile,
}))

const mockFindFile = jest.fn()
jest.mock("../utils/findFiles", () => ({
  __esModule: true,
  findFiles: mockFindFile,
}))

const mockWriteTemplate = jest.fn().mockReturnValue("foo")
jest.mock("../templates/writeTemplate", () => ({
  __esModule: true,
  writeTemplate: mockWriteTemplate,
}))

import { createProxy } from "../createProxy"

describe("createProxy", () => {
  test("should call mockWriteFile", () => {
    mockFindFile.mockReturnValue(["foo"])
    createProxy({
      packageName: "packageName",
      cjs: "lib",
      dest: ".",
      esm: "esm",
      proxyType: "folder",
      root: "",
      src: "src",
      types: "types",
    })
    expect(mockWriteFile).toHaveBeenCalledTimes(1)
  })
})
