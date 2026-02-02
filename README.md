# InstaBlog Astro Theme

InstaBlog is a free Astro website template to help you kickstart your blog.

## Live Demo

[https://jipjip.com/themes/astro/preview/instablog](https://jipjip.com/themes/astro/preview/instablog)

## Features

- Written for Excellent **Page Speed** performance scores
- Renders HTML | CSS | **No-JS**
- Built with **Astro 5** and **TypeScript**
- Very easy to **configure** or **customize**
- Fully **Responsive**
- **Accessibility** out-of-the-box
- Blog:
  - **Write blog content easily** in Markdown
  - Paginated **overview** page
  - Automatic previous and next post links

## Installation

### Create

```npm create astro@latest -- --template JipJip-com/instablog```

TBD... 

### Project Folder

```
/
├── public/
│   ├── fonts/
│   ├── images/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ArticleList.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── ...
│   ├── config/
│   │   └── site.json
│   ├── content/
│   │   ├── blog/
│   │   │   ├── post1.md
│   │   │   ├── post2.md
│   │   │   └── ...
│   │   ├── about.mdx
│   │   ├── blog.mdx
│   │   ├── index.mdx
│   │   └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   ├── getArticles.ts
│   │   └── parseContent.ts
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [...page].astro
│   │   │   └── [slug].astro
│   │   ├── about.astro
│   │   └── index.astro
│   ├── styles/
│   │   ├── articles.css
│   │   ├── base.css
│   │   └── ...
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── README.md
├── tsconfig.json
```

### Commands

Open a terminal and go to the root of your project to run the following commands:

| command | Description |
| :------ | :---------- |
| `npm install` | Install Dependencies |
| `npm run dev` | Start local dev server at [localhost:4321](localhost:4321) |
| `npm run build` | Render a production-ready build in the `./dist/` folder |
| `npm run preview` | Run the rendered site locally (for inspection before shipping) |
| `npm run astro ...` | See: [Astro docs](https://docs.astro.build/en/reference/cli-reference/) |

### Configuration

#### FILE: ./astro.config.mjs

Find the **'site'** entry and edit the URL.

The URL given is where your website will be published. This entry is used to fill things like canonical URL's, the sitemap.xml, etc.

#### FILE: ./src/config/site.json

This file contains defaults and settings:

- `meta.lang`: The language of your website
- `meta.title`: Will be used in the `<title>` if no title is found on the pages
- `meta.description`: Will be used in the `<meta name=description>` if no title is found on the pages
- `settings.excerptLength`: Maximum length of the descriptions shown in the cards
- `settings.blogImageWidth`: Width of image used in blog post (no units!)
- `settings.blogImageHeight`: Height of image used in blog post (no units!)
- `settings.formEndPoint`: URL of endpoint to submit form to
- `settings.formMethod`: Method of form submission
- `settings.formSecretKeyName`: name of secret key
- `settings.formSecretKey`: value of secret key
- `logo.image.url`: Location of the logo shown on top of the page
- `logo.image.size`: Size of the logo (do **not** use units, e.g.: width: 160, height: 90)
- `logo.image.alt`: Alternative text for the logo image
- `logo.text`: Optional text to accompany the logo
- `main.menu...`: Pages to be shown in the menu
- `footer.copyright`: Copyright line to be shown in the footer
- `footer.links...`: Links to be shown in the footer
- `social...`: Links to social media (shown in the footer)

### Styles

#### Fonts

The default font [Inter](https://fonts.google.com/specimen/Inter) is locally stored in the `./public` folder.

If you want to use a different font, store it in the same folder and edit the `./src/styles/base.css` file.  
Change the **src url**, the **font-family** and the `--ff-base` variable.

#### Colors

The color-sets that come with the theme are WCAG AAA compliant.
Colors can be set by editing the CSS variables in the `./src/styles/base.css`.  

InstaBlog comes with a light and dark theme.  
It will switched based on the users preferences.  
Both sets of colors variables are present in the `./src/styles/base.css`.

If you want only one version than delete `@media (prefers-color-scheme: dark) { ... }`

## Adding Posts

Go to `./src/content/blog` and remove the example pages.  

Create a markdown file. The name of the file will be in the URL, for example: the URL of my-super-post.md will be: 'www.yourdomain.nl/blog/my-super-post'.  

Don't use special characters in the name.  
You can uses spaces (Astro will deal with it), but best practices dictates the use of dashes.

Open the file in an editor. Start the file with a frontmatter block using two lines with three dashes.  
In between you can supply the metadata.

Beneath that comes your article.

Example:

```Markdown
---
  title: My super title
  metaTitle: My super title for the HEAD section
  description: An awesome description of my blogpost
  ...
---

## Write Markdown

Lorem ipsum...
```

### Metadata fields

These are defined in `./src/content.config.ts`.  
To sum it up:  

- **title**: (required in blog posts) used in the cards, as the h1 in the post and as backup for the title in the HEAD.
- **metaTitle**: (optional) TITLE used in the HEAD
- **description**: (required) meta description in the HEAD, backup for card description in case excerpt is empty
- **excerpt**: (optional) used in the cards
- **keywords**: (optional) used in meta keywords in HEAD
- **datePublished**: (optional) date of publishing, used in cards and head. **A post without a date is considered a draft!**
- **tags**: (optional) used for categorizing / creating categories
- **image**: (optional) image associated with the post  
&nbsp;&nbsp;url: image url  
&nbsp;&nbsp;alt: (optional) alt text for image
