---
layout: layouts/post.njk
title: How to remove node_modules from repo/ or prevent from getting pushed into github in VSCode
categoryList: [git]
---

```jsx
make .gitignore file.

add node_modules/ line to gitignore file

**run this command**
git rm -r --cached .
git add .
git commit -m "remove gitignore files"
git push
```
