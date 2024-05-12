<p align="center">
  <img src="./assets/gradient-wordmark.gif" alt="Angular brand" width="500"/>
</p>

<h1 align="center">NGX-ARC - Angular Boilerplate</h1>

<br>

This Angular starter template prioritizes the most up-to-date Angular functionalities and adheres to best practices. It provides key features to enhance flexibility and scalability while minimizing unnecessary complexity. The codebase is both lightweight and resilient, empowering developers to integrate their preferred technologies such as UI component libraries, state management solutions, and server-side rendering. With its adaptable boilerplate, customization is effortless, making it suitable for diverse project needs.

<!-- ## ⚗️ Features

- [Angular 16](https://angular.io/docs)
- [PNPM](https://pnpm.io/), [esbuild](https://esbuild.github.io/)
- [Standalone components](https://angular.io/guide/standalone-components)
- [Signals](https://angular.io/guide/signals)
- [Lazy loading](https://angular.io/guide/lazy-loading-ngmodules)
- [PWA](https://angular.io/guide/service-worker-getting-started)
- [I18n](https://ngneat.github.io/transloco/)
- [TailwindCSS](https://tailwindcss.com/)
- OS/Light/Dark themes
- Lightweight, fast, and built using state-of-the-art technology.

## ✅ Ready-to-use

### UI Frameworks

- [TailwindCSS](https://tailwindcss.com/)

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/).
- [@iconify/tailwind](https://docs.iconify.design/usage/css/tailwind/) - Pure CSS icons.

### Add-ons

- <https://github.com/ngneat/transloco>
- <https://github.com/tailwindlabs/tailwindcss>
  - <https://github.com/tailwindlabs/tailwindcss-aspect-ratio>
  - <https://github.com/tailwindlabs/tailwindcss-forms>
  - <https://github.com/tailwindlabs/tailwindcss-typography>
  - <https://github.com/tailwindlabs/prettier-plugin-tailwindcss>
- <https://github.com/iconify/iconify>
  - <https://github.com/iconify/iconify/tree/main/plugins/tailwind>

## ⚙ Prerequisites

- Node.js ([^16.14.0 || ^18.10.0](https://angular.io/guide/versions)): <https://nodejs.org/en/>
- PNPM: <https://pnpm.io/>
- Docker (optional): <https://www.docker.com/>

## 🏹 Start development

> **Note:**
> You have three options to start a new project based on this template:
>
> 1. Create a new GitHub repository from this template.
> 2. Clone this repository to start with a clean git history.
> 3. Scaffold a project fork on StackBlitz.

### Using the GitHub template

[Create a repo from this template on GitHub](https://github.com/juanmesa2097/angular-boilerplate/generate).

---

### Cloning the repository locally

```sh
npx degit juanmesa2097/angular-boilerplate my-app && cd my-app && ./scripts/rename_project.sh my-app
```

### Install dependencies

```sh
pnpm install # run `npm install -g pnpm` if you don't have pnpm installed
```

### Run project

```sh
pnpm dev
```

---

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/juanmesa2097/angular-boilerplate)

## 📝 Checklist

Please review this checklist and modify it as necessary to meet your project requirements.

- [ ] Run the `./scripts/rename_project.sh` script to rename the project.
- [ ] Change the title in `src/index.html` and the favicon in `src/favicon.ico` to match your project.
- [ ] Decide whether to continue using [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) and [lint-staged](https://github.com/okonet/lint-staged) for your project.
- [ ] Clean up the README file to provide clear instructions about your project.
- [ ] Modify the pages in the project to meet your specific requirements.

## 📦 Deploy to Vercel

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/juanmesa2097/angular-boilerplate)

## 📦 Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/juanmesa2097/angular-boilerplate)

## 🐳 Docker

Create an image of the project.

```sh
docker buildx build -t angular-boilerplate:latest .
```

Run the image of the project.

```sh
docker run --rm -p 8080:80 -d angular-boilerplate:latest
``` -->

## Commands

| Command         | Description                                               | npm                     | yarn                 | pnpm                 |
| --------------- | --------------------------------------------------------  | ----------------------- | -------------------- | -------------------- |
| `serve:dev`     | Starts the development server                             | `npm run serve:dev`     | `yarn serve:dev`     | `pnpm serve:dev`     |
| `serve:hmr`     | Starts the development server with a hot module reloading | `npm run serve:dev`     | `yarn serve:dev`     | `pnpm serve:dev`     |
| `lint`          | Runs the linter                                           | `npm run lint`          | `yarn lint`          | `pnpm lint`          |
| `lint:fix`      | Runs the linter and fixes any linting errors              | `npm run lint:fix`      | `yarn lint:fix`      | `pnpm lint:fix`      |
| `format`        | Formats the code with prettier                            | `npm run format`        | `yarn format`        | `pnpm format`        |