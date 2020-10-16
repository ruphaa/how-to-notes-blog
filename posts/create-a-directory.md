---
layout: layouts/post.njk
title: How to create a directory, if it does not exist?
categoryList: [js]
---

```jsx
const fs = require("fs");
const createDirIfNotExists = (dir) =>
  !fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined;

// Example
createDirIfNotExists("test"); // creates the directory 'test', if it doesn't exist
```
