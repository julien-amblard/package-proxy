/** @format */

export const filterIndex = (file: string) => !/index\.(j|t)sx?/.test(file)
export const filterJSON = (file: string) => !/\.json$/.test(file)
export const filterTruthy = (value: any) => !!value
