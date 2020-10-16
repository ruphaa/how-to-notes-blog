---
layout: layouts/post.njk
title: How to get the scroll position of the current page?
categoryList: [js]
---

```jsx
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});

// Example
getScrollPosition(); // {x: 0, y: 200}
```
