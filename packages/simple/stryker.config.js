// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: "pnpm",
  testRunner: "jest",
  plugins: ["@stryker-mutator/jest-runner"],
  reporters: ["html", "clear-text", "progress"],
  coverageAnalysis: "perTest",
  testRunnerNodeArgs: ["--experimental-vm-modules"],
};
export default config;
