---
layout: layouts/post.njk
title: How to figure out if the device is a mobile device or a desktop/laptop?
categoryList: [js]
---

```jsx
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

// Example
detectDeviceType(); // "Mobile" or "Desktop"
```
