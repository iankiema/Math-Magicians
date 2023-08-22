module.exports = {
  verbose: true,
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
