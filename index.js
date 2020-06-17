module.exports = {
  'extends': 'standard',
  "rules": {
    "brace-style": ["warn", "1tbs"],
    "curly": ["warn", "all"],
    'object-curly-newline': ['warn', {
      // Object expressions can have one property on a single line.
      // e.g., `const foo = { bar: 1 };`.
      'ObjectExpression': {
        'minProperties': 2,
        'consistent': true,
        'multiline': true
      },
      // Object destructuring can have two properties on a single line.
      // e.g., `const { foo, bar }= baz;`.
      'ObjectPattern': {
        'minProperties': 3,
        'consistent': true,
        'multiline': true
      },
      // Import declarations can have two properties on a single line.
      // e.g., `import { foo, bar } from 'baz';`.
      'ImportDeclaration': {
        'minProperties': 3,
        'consistent': true,
        'multiline': true
      },
      // Export declarations can have two properties on a single line.
      // e.g., `export { foo, bar };`.
      'ExportDeclaration': {
        'multiline': true,
        'consistent': true,
        'minProperties': 3
      }
    }],
    'object-property-newline': [
      'warn', { 'allowAllPropertiesOnSameLine': false }
    ],
    'semi': [ 'error', 'always' ],
    'no-unused-vars': ['error', { 'varsIgnorePattern': 'apos', 'args': 'none', 'ignoreRestSiblings': true }],
    "space-before-function-paren": 0,
    "padded-blocks": 0,
    "quotes": ['warning', 'single'],
    "standard/no-callback-literal": 0,
    "no-path-concat": 0,
    "no-throw-literal": 0,
    "no-console": 1,
    "import/no-extraneous-dependencies": 1
  },
  "overrides": [
    {
      "files": [ "**/public/**/*.js" ],
      "excludedFiles": [ "**/public/vendor/**/*.js" ],
      "globals": {
        "window": true,
        "document": true,
        "location": true,
        "apos": true,
        "_": true,
        "async": true,
        "confirm": true,
        "$": true,
        "CKEDITOR_BASEPATH": true,
        "CKEDITOR": true,
        "alert": true,
        "jQuery": true,
        "sluggo": true,
        "moog": true,
        "Pikaday": true,
        "moment": true
      }
    },
    {
      "files": [ "test/**/*.js" ],
      "globals": {
        "describe": true,
        "it": true,
        "after": true,
        "before": true
      },
      "rules": {
        "no-console": 0
      }
    },
    {
      "files": ["*.js"],
      "excludedFiles": ["**/public/**/*.js"],
      "rules": {
        "no-var": 0
      }
    }
  ]
};
