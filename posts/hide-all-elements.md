---
layout: layouts/post.njk
title: How to hide all elements specified in JS?
categoryList: [js]
---

```jsx
const hide = (...list) =>
  [...list].forEach((el) => (el.style.display = "none"));

hide(document.querySelectorAll("img"));
```
