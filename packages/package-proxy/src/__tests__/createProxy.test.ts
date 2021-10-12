/** @format */

const mockConsole = jest.fn()
global.console.log = mockConsole

const mockWriteFile = jest.fn().mockImplementation((_a, _b, c) => c())
jest.mock("../utils/writeFile", () => ({
  __esModule: true,
  writeFile: mockWriteFile,
}))

const mockBuildPath = jest.fn()
jest.mock("../utils/buildPath", () => ({
  __esModule: true,
  buildPath: mockBuildPath,
}))

const mockFindFile = jest.fn()
jest.mock("../utils/findFiles", () => ({
  __esModule: true,
  findFiles: mockFindFile,
}))

const mockWriteTemplate = jest.fn().mockReturnValue("content data")
jest.mock("../templates/writeTemplate", () => ({
  __esModule: true,
  writeTemplate: mockWriteTemplate,
}))

import { createProxy } from "../createProxy"

describe("createProxy", () => {
  test("should call mockWriteFile once", () => {
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
    expect(mockConsole).toHaveBeenCalledTimes(1)
    expect(mockWriteFile.mock.calls[0][0]).toEqual("content data")
    expect(mockWriteFile.mock.calls[0][1]).toEqual("./foo")
  })
  test("should call mockWriteFile twice", () => {
    mockWriteFile.mockReset()
    mockFindFile.mockReturnValue(["foo", "bar"])
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
    expect(mockWriteFile).toHaveBeenCalledTimes(2)
  })
  test("should call mockWriteFile twice", () => {
    mockWriteFile.mockReset()
    mockFindFile.mockReturnValue(["foo", "index.js"])
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
    expect(mockWriteFile.mock.calls[0][0]).toEqual("content data")
    expect(mockWriteFile.mock.calls[0][1]).toEqual("./foo")
  })
  test("should call mockWriteFile twice", () => {
    mockWriteFile.mockReset()
    mockFindFile.mockReturnValue(["foo", "foo.json"])
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
    expect(mockWriteFile.mock.calls[0][0]).toEqual("content data")
    expect(mockWriteFile.mock.calls[0][1]).toEqual("./foo")
  })
})
