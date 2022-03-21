/** @format */

import { Settings } from "../../types"
import { getDirectories } from "../getDirectories"
import { getFiles } from "../getFiles"

const slashedRoot = (root: string) => root + (root.endsWith("/") ? "" : "/")

export const findFiles = ({
  proxyType,
  root,
  src,
  ignore,
}: Settings): string[] =>
  proxyType === "file"
    ? getFiles(`${slashedRoot(root)}${src}`, ignore)
    : getDirectories(`${slashedRoot(root)}${src}`, ignore)
