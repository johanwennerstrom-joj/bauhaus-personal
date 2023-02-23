module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'auto',
  printWidth: 110,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  tabWidth: 4,
  useTabs: true,
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
  ],
  tailwindConfig: './tailwind.config.js',
}
