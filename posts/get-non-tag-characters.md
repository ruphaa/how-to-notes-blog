---
layout: layouts/post.njk
title: How to get non-tag characters from an HTML formatted string in JS
categoryList: [js]
---

```jsx
var html1 = '<span class="red">hello world</span> <span>hello friend</span>';

var html2 =
`<ul>
  <li>Hello Medium!</li>
  <li>Hello Friends!</li>
  <li>Lorem, ipsum dolor.</li>
</ul>`;

**Expected Result:**

'hello world hello friend'

`  Hello Medium!
  Hello Friends!
  Lorem, ipsum dolor.`

function decoder(html){
  let decoder = document.createElement('div')
  decoder.innerHTML = html
  console.log(decoder.textContent)
  // return decoder.textContent
}
```
