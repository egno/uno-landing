module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      jsx: true
    },
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 9
  },
  extends: [
    'prettier',
    'prettier/standard', 
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],

  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 0,
    'import/no-unassigned-import': 0,
    'semi': ['error', 'never'],
    'no-console': 'off',
    'object-curly-spacing': ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }
    ],
    'vue/max-attributes-per-line': 0,
    'vue/no-parsing-error': [2, {
      "invalid-first-character-of-tag-name": false
    }]
  }
}
