/** @format */

import { foo as A } from "consumer/deep/folder/dest/folderProxyA"
import { foo as B } from "consumer/deep/folder/dest/folderProxyB"

describe("import from proxify", () => {
  test("should return string 'bar'", () => {
    expect(A).toEqual("bar")
  })
  test("should return string 'bar'", () => {
    expect(B).toEqual("bar")
  })
})
