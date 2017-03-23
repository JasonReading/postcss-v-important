let postcss = require('postcss');
let css = `body {
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
}`;

postcss([require('./index')]).process(css).then(function (result) {
    console.log(result.toString());
});
