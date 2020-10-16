---
layout: layouts/post.njk
title: How to use array split with regex in JS
categoryList: [js, regex]
---

```jsx
const list = "a a a  b  c c  d d d d  e e e e e";
const words = list.split(/\s{1,}/);

console.log(words);

// ["a", "a", "a", "b", "c", "c", "d", "d", "d", "d", "e", "e", "e", "e", "e"]
```

### Resources

[https://www.tracedynamics.com/javascript-split-string-method/](https://www.tracedynamics.com/javascript-split-string-method/)
