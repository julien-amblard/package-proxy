/** @format */

import { foo } from "consumer/folderProxyA"

describe("import from proxify", () => {
  test("should return string 'bar'", () => {
    expect(foo).toEqual("bar")
  })
})
