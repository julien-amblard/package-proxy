/** @format */

const mockGetDir = jest.fn()
const mockGetFiles = jest.fn()
jest.mock("../getDirectories", () => ({
  __esModule: true,
  getDirectories: mockGetDir,
}))
jest.mock("../getFiles", () => ({
  __esModule: true,
  getFiles: mockGetFiles,
}))

import { findFiles } from "../findFiles"

const default_settings: any = { ignore: ["foo"], src: "src", root: "root/" }

describe("utils/findFiles", () => {
  test("should call have correct root", () => {
    mockGetDir.mockReset()
    findFiles(default_settings)
    expect(mockGetDir).toHaveBeenCalledWith("root/src", ["foo"])
  })
  test("should call have correct root", () => {
    mockGetDir.mockReset()
    findFiles({ ...default_settings, root: "root" })
    expect(mockGetDir).toHaveBeenCalledWith("root/src", ["foo"])
  })
  test("should call getDirectories", () => {
    mockGetDir.mockReset()
    findFiles({ ...default_settings, proxyType: "folder" })
    expect(mockGetDir).toHaveBeenCalledTimes(1)
  })
  test("should call getDirectories with correct args", () => {
    mockGetDir.mockReset()
    findFiles({ ...default_settings, proxyType: "folder" })
    expect(mockGetDir).toHaveBeenCalledWith("root/src", ["foo"])
  })

  test("should call getDirectories", () => {
    mockGetDir.mockReset()
    findFiles({ ...default_settings })
    expect(mockGetDir).toHaveBeenCalledTimes(1)
  })
  test("should call getFiles", () => {
    mockGetFiles.mockReset()
    findFiles({ ...default_settings, proxyType: "file" })
    expect(mockGetFiles).toHaveBeenCalledTimes(1)
  })
  test("should call getFiles with correct args", () => {
    mockGetFiles.mockReset()
    findFiles({ ...default_settings, proxyType: "file" })
    expect(mockGetFiles).toHaveBeenCalledWith("root/src", ["foo"])
  })
})
