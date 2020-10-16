---
layout: layouts/post.njk
title: How to match dynamic strings to the regex in JS?
categoryList: [js, regex]
---

```jsx
To dynamically match a word in a given long string, we can use 'RegEx'

// Example
let item = "Burger"
let regex = new RegExp(item, 'ig')       // Output ==>  /Burger/ig
"milkshakepizzachickenfriescokeburgerburger".match(regex)

// Output ==> ["burger", "burger"]
```
