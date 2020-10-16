---
layout: layouts/post.njk
title: How to remove an event listener from an element?
categoryList: [js]
---

```jsx
const off = (el, evt, fn, opts = false) =>
  el.removeEventListener(evt, fn, opts);

const fn = () => console.log("!");
document.body.addEventListener("click", fn);
off(document.body, "click", fn); // no longer logs '!' upon clicking on the page
```
