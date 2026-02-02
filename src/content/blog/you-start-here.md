---
title: Start Here
metaTitle: You are here
description: A small guide to get you on your way with the first post.
datePublished: 2026-02-02T08:00:00
image: 
  url: /images/coffee_break.png
  alt: Let us have a break
---

## Wow! You clicked the post

Posts can be added by creating uniquely named files in the 'blog' folder.  

Enter the metadata, like for this file:  

```md
---
title: Start Here
metaTitle: You are here
description: A small guide to get you on your way with the first post.
datePublished: 2026-02-02T08:00:00
image: 
  url: /images/coffee_break.png
  alt: Let us have a break
---
```

And write your post in MarkDown, like for this file:

```md
## Wow! You clicked the post

Posts can be added bij creating uniquely named files in the 'blog' folder.  

Enter the metadata, like for this file:

etc

etc
```

## Test it!

Run your local build by typing: 

```bash
npm run dev
```

And the console will tell you the url (most likely http://localchost:4321)  

## Build it!

Create your production build:  

```bash
npm run build
```  

## Check your build...

Create your production build:  

```bash
npm run preview
```  

And the console will tell you the url (most likely http://localchost:4321)  

## Go live!

Upload the contents of the 'dist'-folder to your webserver/hosting party/etc 

Enjoy!
