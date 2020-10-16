---
layout: layouts/post.njk
title: How to identify different runtime and browsers in JS?
categoryList: [js]
---

**Browser environment sniffing**

```jsx
const inBrowser = typeof window !== "undefined";
```

**Identify UserAgent of the Browser**

```jsx
const UA = inBrowser && window.navigator.userAgent.toLowerCase();
```

**Determining the current browser vendor**

```jsx
const isIE = UA && /msie|trident/.test(UA);
const isIE9 = UA && UA.indexOf("msie 9.0") > 0;
const isEdge = UA && UA.indexOf("edge/") > 0;
const isAndroid = UA && UA.indexOf("android") > 0;
const isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
const isPhantomJS = UA && /phantomjs/.test(UA);
const isFF = UA && UA.match(/firefox\/(\d+)/);
```
