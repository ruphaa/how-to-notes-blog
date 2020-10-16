---
layout: layouts/post.njk
title: How to pass a custom sort function in js and how does it work?
categoryList: [js]
---

```jsx
var numbers = [4, 2, 5, 1, 3];

numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers);

// [1, 2, 3, 4, 5]
```

```jsx
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

**This is how the compare function works**

If `compareFunction` is supplied, all non-`undefined` array elements are sorted according to the return value of the compare function (all `undefined` elements are sorted to the end of the array, with no call to `compareFunction`). If `a` and `b` are two elements being compared, then:

- If `compareFunction(a, b)` returns less than 0, sort `a` to an index lower than `b` (i.e. `a` comes first).
- If `compareFunction(a, b)` returns 0, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
- If `compareFunction(a, b)` returns greater than 0, sort `b` to an index lower than `a` (i.e. `b` comes first).
- `compareFunction(a, b)` must always return the same value when given a specific pair of elements `a` and `b` as its two arguments. If inconsistent results are returned, then the sort order is undefined.

### Resources

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
