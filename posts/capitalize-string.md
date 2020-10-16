---
layout: layouts/post.njk
title: How to capitalize a string in JS
categoryList: [js, regex]
---

```jsx
First Way:

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

Second Way (Regex):

^ ==> 'Start of the string'
let str = 'the quick green alligator...';
let regex = /\w\S*/g;
// Breaking down regex

\w ==> 'Character'
\S ==> 'Non-whitespace character'
* ==> zero or many occurences
str.match(regex)    // ["the", "quick", "green", "alligator..."]

str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))

```

> Replace function can accept the second parameter as a function/replacer

### Resources

[https://www.digitalocean.com/community/tutorials/js-capitalizing-strings](https://www.digitalocean.com/community/tutorials/js-capitalizing-strings)

[https://www.javascripttutorial.net/javascript-string-replace/](https://www.javascripttutorial.net/javascript-string-replace/)
