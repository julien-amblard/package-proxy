/** @format */

import { foo as A } from "consumer/deepFolder/deepFolderA"
import { foo as B } from "consumer/deepFolder/deepFolderB"

describe("import from proxify", () => {
  test("should return string 'bar'", () => {
    expect(A).toEqual("bar")
  })
  test("should return string 'bar'", () => {
    expect(B).toEqual("bar")
  })
})
