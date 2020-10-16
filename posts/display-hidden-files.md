---
layout: layouts/post.njk
title: How to display hidden files in MAC
categoryList: [mac]
---

```jsx
In terminal, type "defaults write com.apple.finder AppleShowAllFiles TRUE/Yes”
Hold option/alt , right click on finder in the dock and click relaunch.

defaults write com.apple.finder AppleShowAllFiles FALSE

To show the lib folder inside users folder - chflags nohidden ~/Library/
```
