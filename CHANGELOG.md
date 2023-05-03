## Unreleased

## [4.0.0] - 2023-XX-XX

### Changed

- Upgraded dependencies
- Swapped eslint-plugin-node for eslint-plugin-n which is what standard now uses

### Added

- Added missing rules no-var, object-shorthand, array-callback-return, default-case-last, multiline-ternary, no-useless-backreference, no-empty, no-import-assign, no-loss-of-precision, no-unreachable-loop, prefer-regex-literals, n/handle-callback-err, n/no-callback-literal, n/no-deprecated-api, n/no-exports-assign, n/no-new-require, n/no-path-concat, n/process-exit-as-throw

### Fixed

- Fixed `compare` check which was returning some false positives

## 3.4.2 2022-04-20

Use semver range to pin to a major version of eslint-config-standard that supports eslint 7.
