/** @format */
const { defaults } = require("jest-config")

module.exports = {
  testEnvironment: "jsdom",
  rootDir: ".",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  verbose: true,
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: ["src/**/*.+(ts|tsx)"],
  testRegex: "(/(__)?tests(__)?/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  setupFilesAfterEnv: ["<rootDir>/jest.customSetup.ts"],
  moduleNameMapper: {
    "^_(.*)$": ["<rootDir>/src/$1"],
  },
}
