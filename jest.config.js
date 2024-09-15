module.exports = {
    // The root of your source code, typically /src
    roots: ['<rootDir>/src'],
  
    // Jest transformations -- this adds support for JSX, ES6, TypeScript, etc.
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
  
    // Runs special logic, such as cleaning up components when using React Testing Library
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  
    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename should include `.test.js` or `.spec.js`
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
      '<rootDir>/src/**/*.{test,spec}.{js,jsx}',
    ],
  
    // Module file extensions for importing
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  
    // Mock static file imports (like CSS, images, etc.) in tests
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
    },
  
    // Setting up a test environment for React
    testEnvironment: 'jsdom',
  };
  