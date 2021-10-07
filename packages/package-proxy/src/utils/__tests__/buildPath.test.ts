/** @format */

const mockRimRafSyncc = jest.fn()
const mockMkdirSync = jest.fn()

jest.mock("rimraf", () => ({
  __esModule: true,
  default: {
    sync: mockRimRafSyncc,
  },
}))
jest.mock("fs", () => ({
  __esModule: true,
  default: {
    mkdirSync: mockMkdirSync,
  },
}))

import { getPath, buildPath } from "../buildPath"

describe("utils/getPath", () => {
  test("should return correct string", () => {
    expect(getPath(["foo"])).toEqual("foo")
    expect(getPath(["foo", "bar"])).toEqual("foo/bar")
    expect(getPath(["foo", "bar", "baz"])).toEqual("foo/bar/baz")
    expect(getPath(["foo", "", "bar"])).toEqual("foo/bar")
    expect(getPath(["foo", undefined, "bar"] as string[])).toEqual("foo/bar")
    expect(getPath(["foo", "bar"])).toEqual("foo/bar")
    expect(getPath(["foo", null, "bar"] as string[])).toEqual("foo/bar")
  })
})

describe("utils/buildPath", () => {
  buildPath("foo/bar")
  test("should call rimraf with correct path", () => {
    expect(mockRimRafSyncc).toHaveBeenCalledTimes(1)
    expect(mockRimRafSyncc).toBeCalledWith("foo/bar")
  })
  test("should call fs with correct path", () => {
    expect(mockMkdirSync).toHaveBeenCalledTimes(1)
    expect(mockRimRafSyncc).toBeCalledWith("foo/bar")
  })
})
