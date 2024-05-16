import defineConfig from '@antfu/eslint-config'

export default defineConfig({
  stylistic: {
    overrides: {
      'no-console': 'warn',
      'style/brace-style': ['warn', '1tbs'],
      // typescript
      'ts/ban-ts-comment': 'off',
      // unused-imports
      'unused-imports/no-unused-imports': 'warn',
      // jsx
      'style/jsx-quotes': ['off', 'prefer-single'],
      'style/jsx-one-expression-per-line': 'off',
    },
  },
  // vue: {
  //   overrides: {
  //     'vue/html-self-closing': 'off',
  //     'vue/singleline-html-element-content-newline': 'off',
  //   },
  // },
})
