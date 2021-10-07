/** @format */

import { filterIndex, filterJSON, filterTruthy } from "../filters"

describe("utils/filters: filterIndex", () => {
  test("should return true", () => {
    expect(filterIndex("foo")).toBe(true)
    expect(filterIndex("index")).toBe(true)
  })
  test("should return false", () => {
    expect(filterIndex("index.js")).toBe(false)
    expect(filterIndex("index.jsx")).toBe(false)
    expect(filterIndex("index.ts")).toBe(false)
    expect(filterIndex("index.tsx")).toBe(false)
  })
})

describe("utils/filters: filterJSON", () => {
  test("should return true", () => {
    expect(filterJSON("foo.js")).toBe(true)
    expect(filterJSON("foo")).toBe(true)
    expect(filterJSON("index.ts")).toBe(true)
    expect(filterJSON("index.jso")).toBe(true)
  })
  test("should return false", () => {
    expect(filterJSON("index.json")).toBe(false)
    expect(filterJSON("foo.json")).toBe(false)
  })
})

describe("utils/filters: filterTruthy", () => {
  test("should return true", () => {
    expect(filterTruthy("foo")).toBe(true)
    expect(filterTruthy(1)).toBe(true)
  })
  test("should return false", () => {
    expect(filterTruthy("")).toBe(false)
    expect(filterTruthy(undefined)).toBe(false)
    expect(filterTruthy(null)).toBe(false)
    expect(filterTruthy(0)).toBe(false)
  })
})
