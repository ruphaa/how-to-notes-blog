---
layout: layouts/post.njk
title: How to detect click outside a container in jQuery?
categoryList: [js]
---

```jsx
$(document).on("click", function (event) {
  if (!$(event.target).closest(".dropdown").length) {
    $(".dropdown-menu").slideUp("fast");
    // Showing the hint message
    $(".hint").html("A click <b>outside</b> the dropdown is detected.");
  }
});
```
