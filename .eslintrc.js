module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    window: true,
    define: true,
    require: true,
    module: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      es6: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel', 'simple-import-sort', 'prettier', "html"],
  rules: {
    'linebreak-style': ['warn', 'unix'],
    'lines-between-class-members': ['warn', 'always'],
    'no-console': ['error'],
    'no-fallthrough': ['warn'],
    'no-unused-vars': ['warn'],
    'no-debugger': ['warn'],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'lf',
      },
    ],
    'simple-import-sort/sort': [
      'warn',
      {
        groups: [
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything that does not start with a dot.
          ['^[^.]'],
          // Side effect imports.
          ['^\\u0000'],
        ],
      },
    ],
  },
};
