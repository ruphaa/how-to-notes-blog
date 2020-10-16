---
layout: layouts/post.njk
title: How to smooth-scroll to the top of the page?
categoryList: [js]
---

```jsx
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// Example
scrollToTop();
```
