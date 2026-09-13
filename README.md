# MD Nazmul Hasan Fahim | Portfolio

Personal portfolio for **MD Nazmul Hasan Fahim**, a Software Engineering student, programmer, educator, and student leader. The portfolio presents four working themes: **Build, Solve, Teach, and Lead**.

The repository contains two portfolio editions:

- **Root edition**: a Vite-powered, modular editorial portfolio with data-driven content, project case-study modals, scroll effects, and responsive styling.
- **`port2/` edition**: a standalone, zero-build digital operating system concept with a cinematic intro, timeline navigation, interactive canvas effects, and expanded technical case studies.

## Live Portfolio

- Production site: [nazmul-fahim-portfolio.vercel.app](https://my-portfolio-ten-cyan-79.vercel.app/)
- GitHub: [nazmulfahim3010/MyPortfolio](https://github.com/nazmulfahim3010/MyPortfolio)

## Highlights

- Editorial, responsive layout with custom typography and CSS design tokens
- Modular vanilla JavaScript components loaded from `src/main.js`
- Centralized portfolio content in `src/data/portfolioData.js`
- Featured work and project case studies opened through accessible modal dialogs
- Scroll-triggered reveals, a custom cursor, and a frame-based background canvas
- Sections for software engineering, algorithms, technical skills, teaching, leadership, education, achievements, and knowledge sharing
- SEO metadata, Open Graph/Twitter metadata, JSON-LD person data, and favicon support
- `prefers-reduced-motion` handling in the root edition

## Technology

### Root edition

- [Vite](https://vitejs.dev/) 6
- Modern JavaScript using native ES modules
- Custom CSS with responsive layouts, animations, and design variables
- Static assets served from `public/assets/`

### `port2/` edition

- Semantic HTML
- Vanilla CSS
- Minimal vanilla JavaScript
- No package installation or build step required

## Project Structure

```text
MyPortfolio/
├── index.html                 # Root edition HTML shell and SEO metadata
├── package.json               # Vite scripts and development dependency
├── public/assets/             # Images, video, and background frames
├── src/
│   ├── components/            # Renderers for each portfolio section
│   ├── data/portfolioData.js   # Single source of truth for root content
│   ├── styles/main.css         # Root edition styles and design system
│   ├── utils/                 # Shared interaction helpers
│   └── main.js                 # Root application entry point
├── port2/
│   ├── index.html             # Standalone OS-style portfolio
│   ├── main.js                # Canvas and interaction logic
│   ├── style.css              # Standalone edition styling
│   └── README.md              # Edition-specific documentation
└── README.md                  # Repository documentation
```

## Run the Root Edition

### Requirements

- Node.js 18 or newer
- npm 9 or newer

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

Create and preview a production build:

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Run `port2/`

The standalone edition can be opened directly at `port2/index.html`. For a local HTTP server, use either:

```bash
cd port2
python -m http.server 8080
```

or:

```bash
cd port2
npx serve .
```

Then open `http://localhost:8080/` or the URL printed by `serve`.

## Updating Portfolio Content

For the root edition, edit [`src/data/portfolioData.js`](src/data/portfolioData.js). It contains the profile, disciplines, featured project, project list, technical skills, teaching, leadership, experience, education, achievements, research content, and contact links used by the component renderers.

For the standalone edition, update the semantic content directly in [`port2/index.html`](port2/index.html), and adjust behavior or visual treatment in [`port2/main.js`](port2/main.js) and [`port2/style.css`](port2/style.css).

When adding images, video, or background frames to the root edition, place them under [`public/assets/`](public/assets/) and reference them with paths beginning with `/assets/`.

## Deployment

The root edition is a standard Vite static site. A Vercel deployment can use these defaults:

```text
Build command:    npm run build
Output directory: dist
Install command:  npm install
```

The `port2/` edition is already static and can be hosted from any static web server. Choose the edition to publish as the site root based on the presentation you want to use.

## Contact

- GitHub: [@nazmulfahim3010](https://github.com/nazmulfahim3010)
- LinkedIn: [linkedin.com/in/nazmulfahim3010](https://linkedin.com/in/nazmulfahim3010)
- YouTube: [@nazmulfahim3010](https://youtube.com/@nazmulfahim3010)
- Email: [nazmulfahim3010@gmail.com](mailto:nazmulfahim3010@gmail.com)
