import globals from 'globals';
import pluginVue from 'eslint-plugin-vue';
import neostandard, { plugins } from 'neostandard';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    'public',
    '**/ui/public/**/*.js'
  ]),
  ...neostandard(),
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'no-var': 'error',
      'object-shorthand': [ 'warn', 'properties' ],
      'accessor-pairs': [
        'error',
        {
          setWithoutGet: true,
          enforceForClassMembers: true
        }
      ],
      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: false
        }
      ],
      'constructor-super': 'error',
      curly: [ 'warn', 'all' ],
      'default-case-last': 'error',
      'dot-notation': [
        'error',
        {
          allowKeywords: true
        }
      ],
      eqeqeq: [
        'error',
        'always',
        {
          null: 'ignore'
        }
      ],
      'func-call-spacing': [ 'error', 'never' ],
      'new-cap': [
        'error',
        {
          newIsCap: true,
          capIsNew: false,
          properties: true
        }
      ],
      'no-array-constructor': 'error',
      yoda: [ 'error', 'never' ],
      'import-x/export': 'error',
      'import-x/first': 'error',
      'import-x/no-absolute-path': [
        'error',
        {
          esmodule: true,
          commonjs: true,
          amd: false
        }
      ],
      'import-x/no-duplicates': 'error',
      'import-x/no-named-default': 'error',
      'import-x/no-webpack-loader-syntax': 'error',
      'n/handle-callback-err': [ 'error', '^(err|error)$' ],
      'n/no-callback-literal': 'off',
      'n/no-deprecated-api': 'error',
      'n/no-exports-assign': 'error',
      'n/no-new-require': 'error',
      'n/no-path-concat': 'off',
      'n/process-exit-as-throw': 'error',
      'promise/param-names': 'error',

      // Stylistic rules moved to the end and prefixed
      '@stylistic/array-bracket-spacing': [ 'warn', 'always' ],
      '@stylistic/arrow-spacing': [ 'error', {
        before: true,
        after: true
      } ],
      '@stylistic/block-spacing': [ 'error', 'always' ],
      '@stylistic/brace-style': [ 'warn', '1tbs' ],
      '@stylistic/comma-dangle': [ 'error', {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      } ],
      '@stylistic/comma-spacing': [ 'error', {
        before: false,
        after: true
      } ],
      '@stylistic/comma-style': [ 'error', 'last' ],
      '@stylistic/computed-property-spacing': [ 'error', 'never' ],
      '@stylistic/dot-location': [ 'error', 'property' ],
      '@stylistic/eol-last': 'error',
      '@stylistic/generator-star-spacing': [ 'error', {
        before: true,
        after: true
      } ],
      '@stylistic/indent': [
        'error',
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: {
            parameters: 1,
            body: 1
          },
          FunctionExpression: {
            parameters: 1,
            body: 1
          },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoreComments: false,
          ignoredNodes: [ 'TemplateLiteral *' ]
        }
      ],
      '@stylistic/key-spacing': [ 'error', {
        beforeColon: false,
        afterColon: true
      } ],
      '@stylistic/keyword-spacing': [ 'error', {
        before: true,
        after: true
      } ],
      '@stylistic/lines-between-class-members': [ 'error', 'always', { exceptAfterSingleLine: true } ],
      '@stylistic/multiline-ternary': [ 'error', 'always-multiline' ],
      '@stylistic/new-parens': 'error',
      '@stylistic/no-extra-parens': [ 'error', 'functions' ],
      '@stylistic/no-floating-decimal': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': [ 'error', {
        max: 1,
        maxEOF: 0
      } ],
      '@stylistic/no-tabs': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/operator-linebreak': [ 'error', 'after', {
        overrides: {
          '?': 'before',
          ':': 'before',
          '|>': 'before'
        }
      } ],
      '@stylistic/quote-props': [ 'error', 'as-needed' ],
      '@stylistic/quotes': [ 'warn', 'single' ],
      '@stylistic/rest-spread-spacing': [ 'error', 'never' ],
      '@stylistic/semi': [ 'error', 'always' ],
      '@stylistic/semi-spacing': [ 'error', {
        before: false,
        after: true
      } ],
      '@stylistic/space-before-blocks': [ 'error', 'always' ],
      '@stylistic/space-in-parens': [ 'error', 'never' ],
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': [ 'error', {
        words: true,
        nonwords: false
      } ],
      '@stylistic/spaced-comment': [ 'error', 'always', {
        line: { markers: [ '*package', '!', '/', ',', '=' ] },
        block: {
          balanced: true,
          markers: [ '*package', '!', ',', ':', '::', 'flow-include' ],
          exceptions: [ '*' ]
        }
      } ],
      '@stylistic/template-curly-spacing': [ 'error', 'never' ],
      '@stylistic/template-tag-spacing': [ 'error', 'never' ],
      '@stylistic/wrap-iife': [ 'error', 'any', { functionPrototypeMethods: true } ],
      '@stylistic/yield-star-spacing': [ 'error', 'both' ]
    }
  },
  {
    files: [ '**/ui/**/*.js', '**/*.vue' ],
    languageOptions: {
      globals: {
        ...globals.browser,
        apos: 'readonly'
      }
    },
    rules: {
      'no-console': 'error'
    }
  },
  {
    files: [ 'test/**/*.js', '**/*.cy.js' ],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    },
    rules: {
      'no-console': 'error'
    }
  }
]);
