/** @type {import('jest').Config} */
const config = {
  transform: {},
  collectCoverage: true,
  reporters: ["default"],
  coverageReporters: ["text-summary", "html"],
  coverageDirectory: "reports/coverage",
};

module.exports = config;
