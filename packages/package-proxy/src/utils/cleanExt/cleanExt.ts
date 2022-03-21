/** @format */

import { ProxyType } from "../../types"

export const cleanExt = ({
  name,
  proxyType,
}: {
  name: string
  proxyType: ProxyType
}): string => {
  if (proxyType === "folder") return name

  const arrName = name.split(".")
  arrName.length > 1 && arrName.pop()
  return arrName.join(".")
}
