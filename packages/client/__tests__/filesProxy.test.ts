/** @format */

import { foo as A } from "consumer/filesProxy/filesProxyA"
import { foo as B } from "consumer/filesProxy/filesProxyB"

describe("import from proxify", () => {
  test("should return string 'bar'", () => {
    expect(A).toEqual("bar")
  })
  test("should return string 'bar'", () => {
    expect(B).toEqual("bar")
  })
})
