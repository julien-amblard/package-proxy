/** @format */

const mockRimRaf = jest.fn()
const mockLog = jest.fn()
jest.mock("rimraf", () => ({
  __esModule: true,
  default: {
    sync: mockRimRaf,
  },
}))

global.console.log = mockLog

import { deleteFolder } from "../deleteFolder"

describe("utils/deleteFolder", () => {
  deleteFolder("foo")
  test("should trigger rimraf", () => {
    expect(mockRimRaf).toHaveBeenCalledTimes(1)
    expect(mockRimRaf).toBeCalledWith("foo")
  })
  test("should trigger console", () => {
    expect(mockLog).toHaveBeenCalledTimes(1)
  })
})
