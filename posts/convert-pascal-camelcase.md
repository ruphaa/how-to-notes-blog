---
layout: layouts/post.njk
title: How to convert PascalCase/CamelCase to underscore_case in JS?
categoryList: [js, regex]
---

```jsx
str
  .replace(/(?:^|\.?)([A-Z0-9])/g, function (x, y) {
    return "*" + y.toLowerCase();
  })
  .replace(/^*/, "");
```
