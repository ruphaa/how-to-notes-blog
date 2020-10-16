---
layout: layouts/post.njk
title: How to check if the element specified is visible in the viewport?
categoryList: [js]
---

```jsx
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// Examples
elementIsVisibleInViewport(el); // (not fully visible)
elementIsVisibleInViewport(el, true); // (partially visible)
```
