---
layout: layouts/post.njk
title: How to invoke the provided function after wait (in milliseconds)?
categoryList: [js]
---

```jsx
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
delay(
  function (text) {
    console.log(text);
  },
  1000,
  "later"
);

// Logs 'later' after one second.
```
