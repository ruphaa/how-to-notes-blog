---
layout: layouts/post.njk
title: How to remove a specific item from an array by value?
categoryList: [js]
---

```jsx
let arr = [2, 5, 9];

// Let's remove the value 5

arr.splice(1, 1);

console.log(arr); // [2,9];

// Splice is mutable function meaning it alters the given array unlike slice
```
