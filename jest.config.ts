import type {Config} from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
  };
};

module.exports = {
  "roots": [
    "<rootDir>/src" 
  ],
  "testMatch": [
    "**/tests/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    '@pages(.*)$': '<rootDir>/src/pages/$1',
    '@components(.*)$': '<rootDir>/src/components/$1',
    '@styles(.*)$': '<rootDir>/src/styles/$1',
    '@models(.*)$': '<rootDir>/src/models/$1',
  }
}