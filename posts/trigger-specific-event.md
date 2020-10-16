---
layout: layouts/post.njk
title: How to trigger a specific event on a given element, optionally passing custom data?
categoryList: [js]
---

```jsx
const triggerEvent = (el, eventType, detail) =>
  el.dispatchEvent(new CustomEvent(eventType, { detail }));

// Examples
triggerEvent(document.getElementById("myId"), "click");
triggerEvent(document.getElementById("myId"), "click", { username: "bob" });
```
