# PostCSS Overflow Ellipsis [![Build Status][ci-img]][ci]

[PostCSS] plugin to convert shorthand 'overflow: ellipsis' into the appropriate rules.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/TheSisb/postcss-overflow-ellipsis.svg
[ci]:      https://travis-ci.org/TheSisb/postcss-overflow-ellipsis

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-overflow-ellipsis') ])
```

See [PostCSS] docs for examples for your environment.
