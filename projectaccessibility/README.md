<p align="center"><a href="https://clodsire.nl" target="_blank">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://clodsire.nl/img/brand/logo_white_text_dark.png">
        <img src="https://clodsire.nl/img/brand/logo_black_text_light.png" width="450px;">
    </picture>
</a></p>

[Project Accessibility][1] is a React application scaffolded with Vite, providing a fast and efficient development environment. Below are the npm scripts available for managing various aspects of the project.

## Available Scripts

### 1. Start Development Server

```bash
npm start
```
or

```bash
npm run dev
```

Starts the development server using Vite. The application will be available at http://localhost:5000/, and it supports Hot Module Replacement (HMR) for real-time updates. For more details on Vite, refer to the [official Vite documentation][2].

### 2. Build for Production

```bash
npm run build
```

Builds the project for production. The optimized and minified files will be generated in the `dist` directory.

### 3. Preview Production Build

```bash
npm run preview
```

Previews the production build locally. This is useful for testing the generated production code before deployment.

### 4. Lint Code

```bash
npm run lint
```

Uses ESLint to lint JavaScript and JSX files in the project. It automatically fixes fixable issues, reports unused directives, and allows a customizable number of warnings before failing the linting process. For ESLint configuration and rules, refer to the [official ESLint documentation][3].

### 5. Format Code

```bash
npm run format
```

Formats JavaScript and JSX files in the `src` directory using Prettier. It automatically applies formatting changes. For Prettier configuration and options, refer to the [official Prettier documentation][4].

### 6. Check Code Formatting

```bash
npm run check
```

Checks if there are any formatting issues in JavaScript and JSX files using Prettier. It reports issues but does not apply changes.

[1]: https://clodsire.nl/
[2]: https://vitejs.dev/
[3]: https://eslint.org/docs/
[4]: https://prettier.io/docs/en/