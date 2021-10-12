/** @format */
const logMock = jest.fn()
global.console.error = logMock

const mockCleanProxy = jest.fn()
jest.mock("../cleanProxy", () => ({
  __esModule: true,
  cleanProxy: mockCleanProxy,
}))
const mockLoad = jest.fn()

jest.mock("../utils/loadJSON", () => ({
  __esModule: true,
  loadJSON: mockLoad,
}))
import { cliClean } from "../cliClean"

describe("cliClean", () => {
  test("should trigger error if no proxify is provided", () => {
    mockLoad.mockReset().mockReturnValueOnce({})
    logMock.mockReset()
    cliClean({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCleanProxy).toBeCalledTimes(0)
  })

  test("should trigger error if proxify provided is not an array", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      proxify: "foo",
    })
    logMock.mockReset()
    cliClean({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCleanProxy).toBeCalledTimes(0)
  })

  test("should trigger error if proxify provided is an empty array", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      proxify: [],
    })
    logMock.mockReset()
    cliClean({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCleanProxy).toBeCalledTimes(0)
  })
  test("should trigger error if proxify provided does not contain src prop", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      proxify: [{}],
    })
    logMock.mockReset()
    cliClean({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCleanProxy).toBeCalledTimes(0)
  })
  test("should trigger error if proxify[x].src prop is empty", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      proxify: [{ src: "" }],
    })
    logMock.mockReset()
    cliClean({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCleanProxy).toBeCalledTimes(0)
  })
  test("should call mockCleanProxy", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      proxify: [{ src: "foo" }],
    })
    logMock.mockReset()
    cliClean({ config: "foo" })
    expect(logMock).toBeCalledTimes(0)
    expect(mockCleanProxy).toBeCalledTimes(1)
  })
})
