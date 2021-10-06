/** @format */

import { Settings } from "types"
import { getDirectories } from "./getDirectories"
import { getFiles } from "./getFiles"

export const findFiles = ({
  proxyType,
  root,
  src,
  ignore,
}: Settings): string[] =>
  proxyType === "file"
    ? getFiles(`${root}${src}`)
    : getDirectories(`${root}${src}`, ignore)
