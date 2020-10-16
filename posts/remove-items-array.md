---
layout: layouts/post.njk
title: How to remove items from an array in JS? (All Possible Ways)
categoryList: [js]
---

**Removing Elements from End of a JavaScript Array**

```jsx
let arr = [1, 2, 3, 4, 5, 6];

arr.pop();
```

**Removing Elements from Beginning of a JavaScript Array**

```jsx
let arr = [1, 2, 3, 4, 5, 6];

arr.shift();
```

**Using Splice to Remove Array Elements in JavaScript**

```jsx
let arr = [1, 2, 3, 4, 5, 6];

arr.splice(1, 2);

console.log(arr); // [1, 4, 5, 6]
```

**Using the Array filter Method to Remove Items By Value**

```jsx
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var filtered = array.filter(function (value, index, arr) {
  return value > 5;
});
```

**Explicitly Remove Array Elements Using the Delete Operator**

```jsx
var ar = [1, 2, 3, 4, 5, 6];

delete ar[4];

console.log(ar); // [1, 2, 3, 4, undefined, 6]
```

**Clear or Reset a JavaScript Array using length**

```jsx
var ar = [1, 2, 3, 4, 5, 6];

ar.length = 0;

console.log(ar); // []
```
