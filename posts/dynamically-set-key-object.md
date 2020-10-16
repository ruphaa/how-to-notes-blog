---
layout: layouts/post.njk
title: How to dynamically set a key in an object
categoryList: [js]
---

```jsx
const dynamic = "model";

const item = {
  brand: "Porsche",
  [dynamic]: "Panamera",
};

console.log(item); // {brand: "Porsche", model: "Panamera"}
```
