/** @format */
import { PackageJSONModel, Settings } from "types"
import { getPath } from "../utils/buildPath"
import { filterTruthy } from "../utils/filters"

export const writeTemplate = ({
  name,
  dest,
  settings,
}: {
  name: string
  dest: string
  settings: Settings
}) => {
  const root = dest
    .split("/")
    .filter(v => v != ".")
    .filter(filterTruthy)
    .map(() => "..")
    .join("/")

  const packageJSON: PackageJSONModel = {
    name: getPath([settings.packageName, dest.replace("./", "")]),
    private: true,
  }

  const fileType = settings.proxyType === "file" ? ".js" : "/index.js"
  const tsFileType = settings.proxyType === "file" ? ".d.js" : "/index.d.js"

  const filePath = `${root}/{dir}/${settings.src}/${name}{file}`

  if (settings.cjs)
    packageJSON.main = filePath
      .replace(/{dir}/g, settings.cjs)
      .replace(/{file}/g, fileType)

  if (settings.esm)
    packageJSON.module = filePath
      .replace(/{dir}/g, settings.esm)
      .replace(/{file}/g, fileType)

  if (settings.types)
    packageJSON.types = filePath
      .replace(/{dir}/g, settings.types)
      .replace(/{file}/g, tsFileType)

  return JSON.stringify(packageJSON, null, "\t")
}
