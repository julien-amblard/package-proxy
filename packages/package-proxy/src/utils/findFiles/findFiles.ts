/** @format */

import { ProxyType } from "../../types"
import { getDirectories } from "../getDirectories"
import { getFiles } from "../getFiles"

const slashedRoot = (root: string) => root + (root.endsWith("/") ? "" : "/")

export type FindFiles = (args: {
  proxyType?: ProxyType
  root: string
  src: string
  ignore?: string[]
}) => string[]

export const findFiles: FindFiles = ({ proxyType, root, src, ignore }) =>
  proxyType === "file"
    ? getFiles(`${slashedRoot(root)}${src}`, ignore)
    : getDirectories(`${slashedRoot(root)}${src}`, ignore)
