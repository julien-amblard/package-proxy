/** @format */

const mockCreateProxy = jest.fn()
jest.mock("../createProxy", () => ({
  __esModule: true,
  createProxy: mockCreateProxy,
}))
import { cliCreate } from "../cliCreate"

describe("createProxy", () => {
  test("should be true", () => {
    cliCreate({ config: __dirname + "/../mocks/readConf.json" })
    expect(mockCreateProxy).toHaveBeenCalledTimes(3)
  })
})
