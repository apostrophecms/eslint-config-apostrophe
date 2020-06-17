An eslint configuration for the apostrophe core modules.

Due to limitations of eslint the dependencies of eslint plugins like this one
must be explicitly loaded in your `package.json`.

Here is the necessary section of `package.json`:

```javascript
"devDependencies": {
    "mocha": "^5.1.1",
    "eslint": "^4.0.0",
    "eslint-config-standard": "^11.0.0",
    "eslint-plugin-import": "^2.13.0",
    "eslint-plugin-node": "^6.0.1",
    "eslint-plugin-promise": "^3.8.0",
    "eslint-plugin-standard": "^3.1.0"
  }
```

And here is the `.eslintrc` file you'll need:

```javascript
{
  "extends": "apostrophe"
}
```

## Changelog
New major versions will be used whenever a new rule is added that returns an `error` on failure. This is to avoid breaking projects using this configuration as they do normal package updates. If a new rule is added that is simply set to `warn`, minor versions may be used since this should not break build, but only create warning messages for you to resolve or override with rules in your project configuration.

- 3.2.0: Adds a warning for the `quotes` rule to enforce single quotes. This should change to an error in the next major version.
- 3.1.0: Adds a warning for the `curly` and `brace-style` rules to avoid single line blocks. Also `object-curly-newline` and `object-property-newline` rules to have similar treatment for objects. Adds the changelog versioning guidelines.
- 3.0.0: Adds a warning for the `no-var` rule.
- 2.0.2: packaging issue, no changes.
- 2.0.1: use `import/no-extraneous-dependencies` to detect `require` calls that are not backed by a real dependency of this project or module.
- 2.0.0: initial release.
