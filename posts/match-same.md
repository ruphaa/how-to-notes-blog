---
layout: layouts/post.njk
title: How to match same consecutive numbers/characters in JS using regex?
categoryList: [js, regex]
---

```jsx
// To match strings only consisting of 1 or more identical digits, you may use

let regex = /(.)\1*/g

// Breaking down regex

* ==> Zero or more times(https://www.rexegg.com/regex-quickstart.html)

let regex2 = /([0-9])\1{1,}/g

// Breaking down regex2

() ==> Capturing group
([0-9]) ==> Capturing group 1 matching digit
\1 ==> \1 is a backreference to Group 1 value meaning it's a backref -- (The backreference \1 (backslash one) references the first capturing group. \1 matches the exact same text that was matched by the first capturing group)
1{1,} ==> 1 or more occurences of the value captured in Group 1
{1,} ==> limiting quantifier
```

### Resources

[https://www.regular-expressions.info/backref.html](https://www.regular-expressions.info/backref.html)
