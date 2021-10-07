/** @format */

import { loadJSON } from "../loadJSON"

describe("utils/loadJSON", () => {
  test("should return json object", () => {
    const data = loadJSON({
      config: __dirname + "/../../mocks/loadConfigTest.json",
    })
    expect(data).toEqual({ foo: "bar" })
  })
  test("should throw err", () => {
    expect(() =>
      loadJSON({ config: __dirname + "/../../mocks/null" })
    ).toThrowError()
  })
})
