---
layout: layouts/post.njk
title: How to camelize a hyphen-delimited string in  JS
categoryList: [js]
---

We need to write a function that uniformly converts **hello-world** to **helloWorld**

```jsx
const camelizeRE = /-(\w)/g;

const camelize = cached((str) => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
});

camelize("hello-world");
// "helloWorld"
```
