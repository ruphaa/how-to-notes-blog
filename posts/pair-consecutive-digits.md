---
layout: layouts/post.njk
title: How to pair consecutive digits in JS using regex?
categoryList: [js, regex]
---

```jsx
'11211'.match(/\d{2}/g)

// ["11", "21"]

'11211'.match(/\d{3}/g)

// ["112"]
 It will discard the rest of the numbers because, they don't form a 3 digit set
```
