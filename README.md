# PostCSS Very Important

[PostCSS] plugin for very important css.

[PostCSS]: https://github.com/postcss/postcss

## Usage

```css
body {
    color: red;
}

body {
    color: blue !vimportant;
}
body {
    color: blue !vvvvvvvvvvvvvimportant;
}

body {
    color: green !important;
}
```

```js
postcss([ require('postcss-v-important') ])
```

Outputs...

```css
body {
    color: red;
}

:root body {
    color: blue !important;
}
:root:root:root:root:root:root:root:root:root:root:root:root:root body {
    color: orange !important;
}

body {
    color: green !important;
}

```
