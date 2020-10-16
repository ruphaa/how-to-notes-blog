---
layout: layouts/post.njk
title: How to convert a value into String in JS?
categoryList: [js]
---

![Convert value to string](/images/uploads/String.png)

As you can see, there are completely different mechanisms for trying to convert a value into a string. So how do we choose?

- when we want to convert `null` and `undefined` to a string, we often want it to return an empty string.
- when we turn an array and a plain object into a string, we often want to use `JSON.stringify`.
- If the object’s `toString` method is overridden, then we want to use `String()`.
- In other cases, `String()` is used to convert the value to a String.

```jsx
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

function toString(val) {
  if (val === null || val === undefined) return "";
  if (Array.isArray(val)) return JSON.stringify(val);
  if (isPlainObject(val) && val.toString === Object.prototype.toString)
    return JSON.stringify(val); // other cases
  return String(val);
}
```

Also to join the elements in an array, instead of using `join(',')` we can use `String([1,2,3])`
