/** @format */
import { writeTemplate } from "../writeTemplate"

const name = "name"
const dest = "dest"
const cjs = "lib"
const esm = "esm"
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
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      main: "../lib/src/name/index.js",
      module: "../esm/src/name/index.js",
      types: "../lib/src/name/index.d.ts",
    })
  })
  test("should return correct content", () => {
    const data = JSON.parse(
      writeTemplate({
        name,
        dest,
        settings: {
          src,
          cjs,
          esm,
          types: "types",
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      main: "../lib/src/name/index.js",
      module: "../esm/src/name/index.js",
      types: "../types/src/name/index.d.ts",
    })
  })

  test("should return correct content", () => {
    const data = JSON.parse(
      writeTemplate({
        name,
        dest,
        settings: {
          src,
          cjs,
          esm,
          types: null,
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      main: "../lib/src/name/index.js",
      module: "../esm/src/name/index.js",
    })
  })

  test("should return correct content", () => {
    const data = JSON.parse(
      writeTemplate({
        name,
        dest,
        settings: {
          src,
          cjs,
          esm,
          types: false,
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      main: "../lib/src/name/index.js",
      module: "../esm/src/name/index.js",
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
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      main: "../lib/src/name.js",
      module: "../esm/src/name.js",
      types: "../lib/src/name.d.ts",
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
      main: "../lib/src/name/index.js",
      module: "../esm/src/name/index.js",
      types: "../lib/src/name/index.d.ts",
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
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      module: "../esm/src/name/index.js",
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
          packageName,
        } as any,
      })
    )
    expect(data).toEqual({
      name: "packageName/dest",
      private: true,
      main: "../lib/src/name/index.js",
      types: "../lib/src/name/index.d.ts",
    })
  })
})
