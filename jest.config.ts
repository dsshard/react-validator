/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
globalThis.IS_REACT_ACT_ENVIRONMENT = true

export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: './coverage/',
  displayName: '@coxy'
}
