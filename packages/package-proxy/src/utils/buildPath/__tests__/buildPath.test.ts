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

import { buildPath } from "../buildPath"

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
