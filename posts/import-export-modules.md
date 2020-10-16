---
layout: layouts/post.njk
title: How to import/export in JS using module exports and require?
categoryList: [js]
---

```jsx
// calculator.js
const add = function (a, b) {
  return a + b;
};

module.exports = add;

//index.js

const add = require("./");

console.log(add(2, 3));
```

### Resources

[https://alligator.io/js/modules-es6/](https://alligator.io/js/modules-es6/)
