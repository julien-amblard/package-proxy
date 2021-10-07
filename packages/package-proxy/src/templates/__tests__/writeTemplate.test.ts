/** @format */
import { writeTemplate } from "../writeTemplate"

const name = "name"
const dest = "dest"
const cjs = "cjs"
const esm = "esm"
const types = "types"
const src = "src"
const packageName = "packageName"

describe("template/writeTemplate", () => {
  test("should return correct content", () => {
    const data = JSON.parse(
      writeTemplate({
        name,
        dest,
        settings: {
          src,
          cjs,
          esm,
          types,
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      main: "../cjs/src/name/index.js",
      module: "../esm/src/name/index.js",
      types: "../types/src/name/index.d.js",
    })
  })

  test("should return correct content with proxyType as file", () => {
    const data = JSON.parse(
      writeTemplate({
        name,
        dest,
        settings: {
          proxyType: "file",
          src,
          cjs,
          esm,
          types,
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      main: "../cjs/src/name.js",
      module: "../esm/src/name.js",
      types: "../types/src/name.d.js",
    })
  })

  test("should return correct content without types", () => {
    const data = JSON.parse(
      writeTemplate({
        name,
        dest,
        settings: {
          src,
          cjs,
          esm,
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      main: "../cjs/src/name/index.js",
      module: "../esm/src/name/index.js",
    })
  })

  test("should return correct content without cjs", () => {
    const data = JSON.parse(
      writeTemplate({
        name,
        dest,
        settings: {
          src,
          esm,
          types,
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      module: "../esm/src/name/index.js",
      types: "../types/src/name/index.d.js",
    })
  })

  test("should return correct content without esm", () => {
    const data = JSON.parse(
      writeTemplate({
        name,
        dest,
        settings: {
          src,
          cjs,
          types,
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      main: "../cjs/src/name/index.js",
      types: "../types/src/name/index.d.js",
    })
  })
})
