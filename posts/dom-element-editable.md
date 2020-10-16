---
layout: layouts/post.njk
title: How to make a dom element editable?
categoryList: [html, js]
---

In HTML:

```html
<div class="card" id="card">
  <span contenteditable="true">Happy Birthday Girl!</span>
</div>
```

In Javascript

```jsx
document.getElementById("myP").contentEditable = "true";
```
