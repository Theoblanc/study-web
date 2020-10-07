module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
      tsConfig: "tsconfig.jest.json"
    }
  },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  // setupFiles: ["<rootDir>/setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleDirectories: ["node_modules"]
};
