/** @format */

import { foo as A } from "consumer/filesProxyA"
import { foo as B } from "consumer/filesProxyB"

describe("import from proxify", () => {
  test("should return string 'bar'", () => {
    expect(A).toEqual("bar")
  })
  test("should return string 'bar'", () => {
    expect(B).toEqual("bar")
  })
})
