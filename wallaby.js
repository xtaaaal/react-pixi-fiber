module.exports = function(wallaby) {
  return {
    files: ["src/**/*.js", "package.json", "./config/jest/**/*.js"],
    tests: ["test/**/*.js"],
    compilers: {
      "**/*.js": wallaby.compilers.babel(),
    },
    env: {
      type: "node",
    },
    // https://wallabyjs.com/docs/integration/jest.html
    testFramework: "jest",
    setup: function(wallaby) {
      wallaby.testFramework.configure({
        globals: {
          __DEV__: true,
        },
        setupFiles: ["./config/jest/setupPixi.js"],
        testEnvironment: "jest-environment-jsdom-with-canvas",
        transform: {
          "^.+\\.js$": "babel-jest",
        },
      });
    },
  };
};
