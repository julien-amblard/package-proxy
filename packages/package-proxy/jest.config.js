/** @format */

module.exports = {
  preset: "ts-jest",
  rootDir: ".",
  verbose: true,
  setupFiles: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>node_modules/jest-css-modules",
  },
  moduleDirectories: ["node_modules", "<rootDir>src/"],
  moduleFileExtensions: ["js", "json", "ts", "node"],
  coverageDirectory: "<rootDir>/coverage",
  testPathIgnorePatterns: [
    "<rootDir>node_modules/",
    "<rootDir>coverage/",
    "<rootDir>lib/",
    "<rootDir>src/utils/__tests__/mocks/writeTest/",
  ],
}
