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
