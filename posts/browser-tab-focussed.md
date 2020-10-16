---
layout: layouts/post.njk
title: How to find out if the browser tab of the page is focused?
categoryList: [js]
---

```jsx
const isBrowserTabFocused = () => !document.hidden;

// Example
isBrowserTabFocused(); // true
```
