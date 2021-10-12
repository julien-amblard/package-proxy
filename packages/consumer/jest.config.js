/** @format */

module.exports = {
  preset: "ts-jest",
  rootDir: ".",
  verbose: true,
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>node_modules/jest-css-modules",
  },
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: ["js", "json", "ts", "node"],
  modulePathIgnorePatterns: ["writeTest"],
  testPathIgnorePatterns: [
    "<rootDir>node_modules/",
    "<rootDir>coverage/",
    "<rootDir>lib/",
  ],
}
