/** @format */

import { ProxyType } from "../../types"

export const cleanExt = (name: string, type: ProxyType): string => {
  if (type === "folder") return name

  const arrName = name.split(".")
  arrName.length > 1 && arrName.pop()
  return arrName.join(".")
}
