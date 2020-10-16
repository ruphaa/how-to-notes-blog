---
layout: layouts/post.njk
title: How to create a counter with the specified range, step and duration for the specified selector?
categoryList: [js]
---

```jsx
const counter = (selector, start, end, step = 1, duration = 2000) => {
  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step;
      document.querySelector(selector).innerHTML = current;
      if (current >= end) document.querySelector(selector).innerHTML = end;
      if (current >= end) clearInterval(timer);
    }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};

// Example
counter("#my-id", 1, 1000, 5, 2000); // Creates a 2-second timer for the element with id="my-id"
```
