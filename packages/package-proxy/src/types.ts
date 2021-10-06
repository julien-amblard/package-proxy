/** @format */

export type ProxyType = "file" | "folder"

export type FolderPath = {
  esm?: string
  cjs?: string
  types?: string
}

export type DefaultSettings = {
  dest: string
  proxyType: ProxyType
} & FolderPath

export type PackageJSONModel = {
  name: string
  private: true
  main?: string
  module?: string
  types?: string
}

export type ProxifyObject = {
  root?: string
  src: string
  dest: string
  proxyType?: ProxyType
  ignore?: string[]
} & FolderPath

export type JSONConfig = {
  packageName: string
  root?: string
  proxify: ProxifyObject[]
} & FolderPath

export type Settings = {
  packageName: string
  root: string
} & ProxifyObject

export type CleanOptions = {
  source?: string
  dest?: string
  proxyType?: ProxyType
}
