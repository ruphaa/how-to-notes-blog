---
layout: layouts/post.njk
title: How to swap variables using array destructuring in JS
categoryList: [js]
---

```jsx
let x = 2;
let y = 3;
[x, y] = [y, x];

console.log(x); // 3
console.log(y); // 2
```
