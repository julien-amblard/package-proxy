/** @format */
const logMock = jest.fn()
global.console.error = logMock

const mockCreateProxy = jest.fn()
jest.mock("../createProxy", () => ({
  __esModule: true,
  createProxy: mockCreateProxy,
}))
const mockLoad = jest.fn()

jest.mock("../utils/LoadJSON", () => ({
  __esModule: true,
  loadConfigJSON: mockLoad,
}))
import { cliCreate } from "../cliCreate"

describe("cliCreate", () => {
  test("should trigger error if no packageName is provided", () => {
    mockLoad.mockReturnValueOnce({
      proxify: [],
    })
    logMock.mockReset()
    cliCreate({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCreateProxy).toBeCalledTimes(0)
  })

  test("should trigger error if no proxify is provided", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
    })
    logMock.mockReset()
    cliCreate({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCreateProxy).toBeCalledTimes(0)
  })

  test("should trigger error if proxify provided is not an array", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      proxify: "foo",
    })
    logMock.mockReset()
    cliCreate({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCreateProxy).toBeCalledTimes(0)
  })

  test("should trigger error if proxify provided is an empty array", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      proxify: [],
    })
    logMock.mockReset()
    cliCreate({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCreateProxy).toBeCalledTimes(0)
  })
  test("should trigger error if proxify provided does not contain src prop", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      proxify: [{}],
    })
    logMock.mockReset()
    cliCreate({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCreateProxy).toBeCalledTimes(0)
  })
  test("should trigger error if proxify[x].src prop is empty", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      proxify: [{ src: "" }],
    })
    logMock.mockReset()
    cliCreate({ config: "foo" })
    expect(logMock).toBeCalledTimes(1)
    expect(mockCreateProxy).toBeCalledTimes(0)
  })

  test("should call createProxy with correct default args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      proxify: [{ src: "src" }],
    })
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "lib",
      dest: ".",
      esm: "esm",
      proxyType: "folder",
      root: "",
      src: "src",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      types: "mainTypes",
      proxify: [{ src: "src" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "lib",
      dest: ".",
      esm: "esm",
      proxyType: "folder",
      root: "",
      src: "src",
      types: "mainTypes",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      types: "mainTypes",
      proxify: [{ src: "src", types: "customeType" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "lib",
      dest: ".",
      esm: "esm",
      proxyType: "folder",
      root: "",
      src: "src",
      types: "customeType",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      cjs: "mainCjs",
      proxify: [{ src: "src" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "mainCjs",
      dest: ".",
      esm: "esm",
      proxyType: "folder",
      root: "",
      src: "src",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      cjs: "mainCjs",
      proxify: [{ src: "src", cjs: "customCjs" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "customCjs",
      dest: ".",
      esm: "esm",
      proxyType: "folder",
      root: "",
      src: "src",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      esm: "mainEsm",
      proxify: [{ src: "src" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "lib",
      dest: ".",
      esm: "mainEsm",
      proxyType: "folder",
      root: "",
      src: "src",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      esm: "mainEsm",
      proxify: [{ src: "src", esm: "customESM" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "lib",
      dest: ".",
      esm: "customESM",
      proxyType: "folder",
      root: "",
      src: "src",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      root: "customRoot",
      proxify: [{ src: "src" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "lib",
      dest: ".",
      esm: "esm",
      proxyType: "folder",
      root: "customRoot",
      src: "src",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      dest: "./dest",
      proxify: [{ src: "src" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "lib",
      dest: "./dest",
      esm: "esm",
      proxyType: "folder",
      root: "",
      src: "src",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      dest: "./dest",
      proxify: [{ src: "src", dest: "./customDest" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "lib",
      dest: "./customDest",
      esm: "esm",
      proxyType: "folder",
      root: "",
      src: "src",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      proxyType: "file",
      proxify: [{ src: "src" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "lib",
      dest: ".",
      esm: "esm",
      proxyType: "file",
      root: "",
      src: "src",
    })
  })

  test("should call createProxy with correct args", () => {
    mockLoad.mockReset().mockReturnValueOnce({
      packageName: "packageName",
      proxyType: "file",
      proxify: [{ src: "src", proxyType: "folder" }],
    })
    mockCreateProxy.mockReset()
    cliCreate({ config: "foo" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(1)
    expect(mockCreateProxy).toHaveBeenCalledWith({
      packageName: "packageName",
      cjs: "lib",
      dest: ".",
      esm: "esm",
      proxyType: "folder",
      root: "",
      src: "src",
    })
  })
})
