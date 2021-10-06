/** @format */

export const filterIndex = (file: string) => file !== "index.js"
export const filterJSON = (file: string) => !/\.json$/.test(file)
export const filterTruthy = (value: any) => !!value
