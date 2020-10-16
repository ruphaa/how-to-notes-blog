---
layout: layouts/post.njk
title: How to flatten an array in JS?
categoryList: [js]
---

```jsx
const arr = [
  [1, 2, 3],
  [4, 5],
];

// First way

console.log(arr.flat()); // [1,2,3,4,5]

// Array.flat - can take numeric arguments which denotes the number of levels to be considered for flattening
// Array.flat(Infinity) - flats the array till the very last element(depth)

// Second way

var flattenedArray = Array.prototype.concat.apply([], arr);

console.log(flattenedArray); // [1,2,3,4,5]

// This flattens only 1 level deep
```
