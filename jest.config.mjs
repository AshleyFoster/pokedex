import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  dir: './src',
})
 
/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: [ '<rootDir>/jest-setup.ts' ],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/testUtils.tsx']
}
 
export default createJestConfig(config)
