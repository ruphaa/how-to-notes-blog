---
layout: layouts/post.njk
title: How to retrieve a set of properties indicated by the given selectors from an object?
categoryList: [js]
---

```jsx
const get = (from, ...selectors) =>
  [...selectors].map((s) =>
    s
      .replace(/\[([^\[\]]*)\]/g, ".$1.")
      .split(".")
      .filter((t) => t !== "")
      .reduce((prev, cur) => prev && prev[cur], from)
  );
const obj = {
  selector: { to: { val: "val to select" } },
  target: [1, 2, { a: "test" }],
};

// Example
get(obj, "selector.to.val", "target[0]", "target[2].a"); // ['val to select', 1, 'test']
```
