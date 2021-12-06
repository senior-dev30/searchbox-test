module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      diagnostics: false,
    },
    NODE_ENV: 'test',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '^Components/(.+)$': '<rootDir>/src/components/$1',
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', 'src'],
  verbose: true,
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!(react-file-drop|schema-to-yup)/).+\\.(js|jsx|ts|tsx)$',
  ],
  testEnvironment: 'jsdom',
};
