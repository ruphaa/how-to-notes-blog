---
layout: layouts/post.njk
title: How to remove duplicates from an array in JS
categoryList: [js]
---

Method 1: Using Set

```jsx
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

let uniqueNum = Array.from(new Set([...nums]));
```
