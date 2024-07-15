# myPortfolio-vue

A static webpage application built in [Vue](https://vuejs.org) for templating and using [TailwindCSS](https://tailwindcss.com/) for styling and hosted on my [GitHub pages domain](https://churuizramos.github.io/). This page will contain a bio about myself as well as quick links to access my socials and my project repos. After the initial release I plan on adding dynamic features such as a blog section that displays my latest posts across socials.

#### Why Vue?

I originially created the first version of the site in my [webfolio](https://github.com/churuizramos/lordruzki-webfolio/) repo was written using raw HTML and CSS as I originally didn't see the need in a framework for my use case. As the page complexity increased, especially when using a CSS library, it became very difficult to maintain and update the structure.

Vue allows me to create templates of components that for now help me keep my html clean and easy to read for now but later on it will be beneficial when I create the component template for rendering my projects from a single file.

#### Why TailwindCSS?

I originally used bootstrap but while it was useful, Tailwind's config file was a feature that really attracted me. Using the config file I can create a standard for colors and designs that will be applied globally to my page.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run predeploy
npm run deploy
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
