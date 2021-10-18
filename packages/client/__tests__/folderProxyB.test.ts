/** @format */

import { foo } from "consumer/folderProxyB"

describe("import from proxify", () => {
  test("should return string 'bar'", () => {
    expect(foo).toEqual("bar")
  })
})
