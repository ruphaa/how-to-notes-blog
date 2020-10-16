---
layout: layouts/post.njk
title: How to check if the element has the specified class?
categoryList: [js]
---

```jsx
hasClass(document.querySelector("p.special"), "special");

const hasClass = (el, className) => el.classList.contains(className);
```
