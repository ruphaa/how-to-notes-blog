---
layout: layouts/post.njk
title: How to import and export functions in JS?
categoryList: [js]
---

```jsx
// calculator.js
export function add(a, b) {
  return a + b;
}
[OR];
const add = function (a, b) {
  return a + b;
};
const sub = function (a, b) {
  return a - b;
};

export { add, sub };

//index.js

import { add, sub } from "./calculator.js";

console.log(add(2, 3));
console.log(sub(6, 3));
```
