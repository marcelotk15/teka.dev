const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})
  
/** @type {import('jest').Config} */
const customJestConfig = {
    moduleDirectories: ['node_modules', '<rootDir>/'],
    moduleNameMapper: {
      "@/(.*)$": ["<rootDir>/$1"],
      "@theme": ["<rootDir>/stitches.config.ts"],
      "@asgard-ds(.*)$": ["<rootDir>/asgard/$1"]
    },
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)