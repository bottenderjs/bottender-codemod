# bottender-codemod

This repository contains a collection of codemod scripts for use with
[JSCodeshift](https://github.com/facebook/jscodeshift) that help update Bottender
APIs.

### Usage

`npx bottender-codemod <transform> <path> [...options]`

- `transform` - name of transform, see available transforms below.
- `path` - files or directory to transform
- use the `--dry` option for a dry-run and use `--print` to print the output for comparison

This will start an interactive wizard, and then run the specified transform.

### Included Transforms

#### `camelcase`

Converts api calls and attributes on context into camel case.

```sh
npx bottender-codemod camelcase <path>
```
