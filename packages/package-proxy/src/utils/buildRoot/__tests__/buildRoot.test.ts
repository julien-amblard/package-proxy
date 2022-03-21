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

import { buildRoot } from "../buildRoot"

describe("utils/buildRoot", () => {
  test("should return correct string", () => {
    expect(buildRoot("")).toEqual("")
    expect(buildRoot("./")).toEqual("")
    expect(buildRoot(".")).toEqual("")
    expect(buildRoot("foo")).toEqual("../")
    expect(buildRoot("foo/bar")).toEqual("../../")
    expect(buildRoot("foo/bar/baz")).toEqual("../../../")
  })
})
