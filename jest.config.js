module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/tests/fileMock.js"
  },
  transform: {
    "^.+\\.[jt]sx$": "babel-jest",
    "^.+\\.js$": "babel-jest"
  },
  extensionsToTreatAsEsm: [".jsx"],
};