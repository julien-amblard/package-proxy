/** @format */

const mockRimRaf = jest.fn()
jest.mock("rimraf", () => ({
  __esModule: true,
  default: {
    sync: mockRimRaf,
  },
}))

import { cleanProxy } from "../cleanProxy"

const root = __dirname + "/../mocks/cleanProxyTest/"
describe("cleanProxy", () => {
  test("should trigger rimraf ", () => {
    cleanProxy({
      root,
      src: "helpers",
      dest: "helpers",
      proxyType: "file",
    } as any)
    expect(mockRimRaf).toHaveBeenCalledTimes(1)
  })
  test("should trigger rimraf ", () => {
    mockRimRaf.mockReset()
    cleanProxy({
      root,
      src: "components",
    } as any)
    expect(mockRimRaf).toHaveBeenCalledTimes(2)
  })
})
