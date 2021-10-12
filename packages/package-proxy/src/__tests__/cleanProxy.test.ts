/** @format */

const mockDelete = jest.fn()
jest.mock("../utils/deleteFolder", () => ({
  __esModule: true,
  deleteFolder: mockDelete,
}))

const mockFind = jest.fn()
jest.mock("../utils/findFiles", () => ({
  __esModule: true,
  findFiles: mockFind,
}))

import { cleanProxy } from "../cleanProxy"

const root = __dirname + "/../mocks/cleanProxyTest/"
describe("cleanProxy", () => {
  test("should trigger deleteFolder ", () => {
    cleanProxy({
      root,
      dest: "helpers",
      proxyType: "file",
    } as any)
    expect(mockDelete).toHaveBeenCalledTimes(1)
    expect(mockDelete.mock.calls[0][0]).toEqual("./helpers")
  })
  test("should trigger deleteFolder ", () => {
    mockFind.mockReturnValue(["foo.js"])
    mockDelete.mockReset()
    cleanProxy({
      root,
      proxyType: "file",
    } as any)
    expect(mockDelete).toHaveBeenCalledTimes(1)
    expect(mockDelete.mock.calls[0][0]).toEqual("./foo")
  })
  test("should trigger deleteFolder ", () => {
    mockFind.mockReturnValue(["foo.js", "index.js"])
    mockDelete.mockReset()
    cleanProxy({
      root,
      proxyType: "file",
    } as any)
    expect(mockDelete).toHaveBeenCalledTimes(1)
    expect(mockDelete.mock.calls[0][0]).toEqual("./foo")
  })
  test("should trigger deleteFolder ", () => {
    mockFind.mockReturnValue(["foo"])
    mockDelete.mockReset()
    cleanProxy({
      root,
    } as any)
    expect(mockDelete).toHaveBeenCalledTimes(1)
    expect(mockDelete.mock.calls[0][0]).toEqual("./foo")
  })
})
