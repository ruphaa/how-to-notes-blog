---
layout: layouts/post.njk
title: How to toggle a class for an element?
categoryList: [js]
---

```jsx
const toggleClass = (el, className) => el.classList.toggle(className);

// Example
toggleClass(document.querySelector("p.special"), "special");
// The paragraph will not have the 'special' class anymore
```
