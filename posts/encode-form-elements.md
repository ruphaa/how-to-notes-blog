---
layout: layouts/post.njk
title: How to encode a set of form elements as an object?
categoryList: [js]
---

```jsx
const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );

// Example
formToObject(document.querySelector("#form")); // { email: 'test@email.com', name: 'Test Name' }
```
