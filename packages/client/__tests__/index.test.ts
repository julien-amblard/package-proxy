/** @format */

import { testFoo } from "../src"

describe("import from proxify", () => {
  test("should return string 'bar'", () => {
    expect(testFoo()).toEqual("bar")
  })
})
