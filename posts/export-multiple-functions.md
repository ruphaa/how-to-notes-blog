---
layout: layouts/post.njk
title: How to export multiple functions using export default in JS?
categoryList: [js]
---

```jsx
const printFancyNumber = function () {
  console.log("I print fancy number");
};

const displayFancyMessage = function () {
  console.log("I print fancy message too");
};

export default {
  printFancyNumber,
  displayFancyMessage,
};
```
