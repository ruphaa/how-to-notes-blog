---
layout: layouts/post.njk
title: How to get the last word in a string in JS?
categoryList: [js]
---

```jsx
var word = str.split("-").pop();

OR;

var last = str.substring(str.lastIndexOf("-") + 1);

OR;

var data = "Welcome to Stack Overflow";
console.log(data.split(" ").splice(-1));
```
