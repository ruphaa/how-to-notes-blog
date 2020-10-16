---
layout: layouts/post.njk
title: How to convert a map into an array in JS
categoryList: [js]
---

```jsx
const map = {"a" => 3, "b" => 1, "c" => 2, "d" => 4, "e" => 5};

const arr = Array.from(map);

console.log(arr)

// [["a", 3], ["b", 1], ["c", 2], ["d", 4], ["e", 5]]
```
