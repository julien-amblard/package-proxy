/** @format */

import { getPath } from "../getPath"

describe("utils/getPath", () => {
  test("should return correct string", () => {
    expect(getPath(["foo"])).toEqual("foo")
    expect(getPath(["foo", "bar"])).toEqual("foo/bar")
    expect(getPath(["foo", "bar", "baz"])).toEqual("foo/bar/baz")
    expect(getPath(["foo", "", "bar"])).toEqual("foo/bar")
    expect(getPath(["foo", undefined, "bar"] as string[])).toEqual("foo/bar")
    expect(getPath(["foo", "bar"])).toEqual("foo/bar")
    expect(getPath(["foo", null, "bar"] as string[])).toEqual("foo/bar")
  })
})
