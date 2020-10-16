---
layout: layouts/post.njk
title: How to identify a plain object from other special objects like Array, String and RegEx in JS?
categoryList: [js]
---

```jsx
function isPlainObject (obj){
  return Object.prototype.toString.call(obj) === '[object Object]'
}

Because:

_toString.call([1,2,3]) - [object Array]
_toString.call(new String('Boss')) - [object String]
_toString.call(/hello world/) - [object RegExp]
```
