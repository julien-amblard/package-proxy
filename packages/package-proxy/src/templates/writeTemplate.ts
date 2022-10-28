/** @format */
import { PackageJSONModel, Settings } from "../types"
import { getPath, buildRoot } from "../utils"

export const writeTemplate = ({
  name,
  dest,
  settings,
}: {
  name: string
  dest: string
  settings: Settings
}) => {
  const root = buildRoot(dest)

  const packageJSON: PackageJSONModel = {
    name: getPath([settings.packageName, dest.replace("./", "")]),
    private: true,
  }

  const fileType = settings.proxyType === "file" ? ".js" : "/index.js"
  const tsFileType = settings.proxyType === "file" ? ".d.ts" : "/index.d.ts"

  const filePath = [`${root}{dir}`, settings.src, `${name}{file}`]
    .filter(v => v !== "/")
    .join("/")

  if (settings.cjs)
    packageJSON.main = filePath
      .replace(/{dir}/g, settings.cjs)
      .replace(/{file}/g, fileType)

  if (settings.esm)
    packageJSON.module = filePath
      .replace(/{dir}/g, settings.esm)
      .replace(/{file}/g, fileType)

  if (settings.types !== false && settings.types !== null) {
    if (settings.types) {
      packageJSON.types = filePath
        .replace(/{dir}/g, settings.types)
        .replace(/{file}/g, tsFileType)
    } else if (settings.cjs) {
      packageJSON.types = filePath
        .replace(/{dir}/g, settings.cjs)
        .replace(/{file}/g, tsFileType)
    }
  }

  return JSON.stringify(packageJSON, null, "\t")
}
