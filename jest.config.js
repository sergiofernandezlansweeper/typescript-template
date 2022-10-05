const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  setupFiles: ["core-js"],
  transform: {
    ...tsjPreset.transform,
  },
  testRegex: ".*/.*(test|spec)\\.(js|ts)$",
  testPathIgnorePatterns: ["/node_modules/"],
  modulePathIgnorePatterns: ["build", "dist"],
  moduleFileExtensions: ["ts", "js", "json"],
  collectCoverage: true,
  testURL: "http://localhost/",
  setupFilesAfterEnv: ["jest-extended"],
};
