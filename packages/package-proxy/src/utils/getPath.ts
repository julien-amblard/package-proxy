/** @format */

import { filterTruthy } from "./filters"

export const getPath = (path: string[]): string =>
  path.filter(filterTruthy).join("/")
