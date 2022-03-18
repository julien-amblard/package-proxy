/** @format */

import { loadConfigJSON } from "../"

describe("utils/loadConfigJSON", () => {
  test("should return json object", () => {
    const data = loadConfigJSON(
      __dirname + "/../../../mocks/loadConfigTest.json"
    )
    expect(data).toEqual({ foo: "bar" })
  })
  test("should throw err", () => {
    expect(() =>
      loadConfigJSON(__dirname + "/../../../mocks/null")
    ).toThrowError()
  })
})
