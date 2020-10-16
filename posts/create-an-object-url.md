---
layout: layouts/post.njk
title: How to create an object containing the parameters of the current URL?
categoryList: [js]
---

```jsx
const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

// Examples
getURLParameters("http://url.com/page?n=Adam&s=Smith"); // {n: 'Adam', s: 'Smith'}
getURLParameters("google.com"); // {}
```
