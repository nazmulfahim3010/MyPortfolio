# MD Nazmul Hasan Fahim — Software Engineering Portfolio

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live%20Demo-black?style=for-the-badge&logo=vercel&logoColor=white)](https://nazmul-fahim-portfolio.vercel.app)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/ES6%2B-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/Design_System-Custom_CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> A modern, editorial, agency-grade digital portfolio and engineering showcase for **MD Nazmul Hasan Fahim** — Software Engineering student (CGPA 3.91), programmer (C, C++, Python), educator (ACM Instructor, 5+ years mentorship), and student leader.

---

## 🌐 Live Demo & Deployment

| Platform | Status | URL |
| :--- | :--- | :--- |
| **Vercel (Production)** | 🟢 Active | [https://nazmul-fahim-portfolio.vercel.app](https://nazmul-fahim-portfolio.vercel.app) |
| **GitHub Repository** | 🟢 Public | [https://github.com/nazmulfahim3010/MyPortfolio](https://github.com/nazmulfahim3010/MyPortfolio) |

> **Note:** If your custom Vercel deployment URL differs (e.g., generated with a unique project hash), you can update the link in this README or point your custom domain in Vercel project settings.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack & Architecture](#-tech-stack--architecture)
- [Project Structure](#-project-structure)
- [Getting Started & Run Instructions](#-getting-started--run-instructions)
  - [Prerequisites](#prerequisites)
  - [1. Clone Repository](#1-clone-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Run Local Development Server](#3-run-local-development-server)
  - [4. Build for Production](#4-build-for-production)
  - [5. Preview Production Build](#5-preview-production-build)
- [How to Customize Portfolio Content](#-how-to-customize-portfolio-content)
- [Deployment Guide](#-deployment-guide)
  - [Deploying to Vercel](#deploying-to-vercel)
  - [Deploying to GitHub Pages](#deploying-to-github-pages)
- [Author & Contact](#-author--contact)

---

## 🌟 Overview

This portfolio goes beyond conventional static templates. It is engineered with an editorial, magazine-grade visual aesthetic featuring:
- High-contrast typography (**Space Grotesk**, **Plus Jakarta Sans**, **JetBrains Mono**).
- Dynamic, data-driven modular architecture where all content lives in a single source of truth (`src/data/portfolioData.js`).
- Deep case-study modals for technical projects with architectural breakdowns, problem statements, solutions, and key takeaways.
- Focus on four core disciplines: **Build** (Software Engineering), **Solve** (Algorithms & Problem Solving), **Teach** (Education & Mentorship), and **Lead** (Institutional Leadership).

---

## ⚡ Key Features

1. **Editorial Magazine-Style Layout**: High-impact hero section with live telemetry status, academic metrics (CGPA 3.91), and role definitions.
2. **Interactive Case Study Modals**: In-depth modal dialogs detailing problem analysis, architectural blueprints, tech stacks, and results.
3. **Four-Discipline Matrix**: Highlighting core proficiencies in Low-level Systems (C/C++), Algorithmic Problem Solving, Pedagogy, and Institutional Leadership.
4. **Cinematic & Scroll Interactions**: Page-wide Intersection Observer scroll animations, custom studio follower cursor, and background scroll canvas.
5. **SEO & Structured Data**: Built-in JSON-LD schema for person profiles, Open Graph tags, and Twitter Cards for rich social preview.
6. **Responsive & Accessible**: Mobile-first responsive breakpoints with `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack & Architecture

- **Bundler & Dev Server:** [Vite 6](https://vitejs.dev/)
- **Frontend Core:** Vanilla JavaScript (ES Modules, zero heavy framework overhead)
- **Styling:** Custom Vanilla CSS Design System with CSS variables, glassmorphism, responsive grid/flex layouts, and smooth animations
- **Typography:** JetBrains Mono, Space Grotesk, Plus Jakarta Sans (Google Fonts)
- **Data Architecture:** Fully decoupled single source of truth in `src/data/portfolioData.js`

---

## 📂 Project Structure

```text
MyPortfolio/
├── .github/
│   └── workflows/
│       └── static.yml              # GitHub Actions workflow for deployment
├── public/
│   └── assets/                     # Static assets (images, portrait, icons)
├── src/
│   ├── components/                 # Modular UI components
│   │   ├── About.js                # Asymmetric editorial bio & metadata blocks
│   │   ├── Achievements.js         # Academic & organizational milestones
│   │   ├── BackgroundScrollCanvas.js # Canvas scroll visual engine
│   │   ├── CaseStudyModal.js       # Interactive case study dialog controller
│   │   ├── CinematicIntro.js       # Film-style intro animation
│   │   ├── ContactFooter.js        # Contact channels, socials & reach-out form
│   │   ├── Cursor.js               # Studio custom trailing cursor
│   │   ├── Disciplines.js          # The 4 Pillars (Build, Solve, Teach, Lead)
│   │   ├── ExperienceEducation.js  # Chronological academic & leadership history
│   │   ├── FeaturedProject.js      # Flagship algorithmic project showcase
│   │   ├── FinalScreen.js          # Film closing screen
│   │   ├── Hero.js                 # Magazine-cover hero section
│   │   ├── Leadership.js           # Institutional roles & community impact
│   │   ├── Navbar.js               # Dynamic blur header with mobile toggle
│   │   ├── Projects.js             # Alternating project case study cards
│   │   ├── ResearchContent.js      # YouTube & public knowledge sharing
│   │   ├── ScrollExperience.js     # Scroll experience controller
│   │   └── TechnicalSkills.js      # Categorized technical index
│   ├── data/
│   │   └── portfolioData.js        # 🌟 Single source of truth for all content
│   ├── styles/
│   │   └── main.css                # Global design system, variables & components
│   ├── utils/
│   │   └── scrollAnimations.js     # Intersection Observer scroll trigger engine
│   └── main.js                     # Main application entry point & component mount
├── index.html                      # HTML root & SEO metadata (JSON-LD)
├── package.json                    # Dependencies and npm scripts
└── README.md                       # Project documentation & run guide
```

---

## 🚀 Getting Started & Run Instructions

Follow these step-by-step instructions to clone, install, and run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed:
- **Node.js**: v18.0.0 or later (v20+ / v24+ recommended)
- **npm**: v9.0.0 or later

Verify your local installation:
```bash
node -v
npm -v
```

---

### 1. Clone Repository

```bash
git clone https://github.com/nazmulfahim3010/MyPortfolio.git
cd MyPortfolio
```

---

### 2. Install Dependencies

Install the required Vite dependencies:
```bash
npm install
```

---

### 3. Run Local Development Server

Start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

Terminal will display the local URL:
```text
  VITE v6.x.x  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Open `http://localhost:5173/` in your browser.

---

### 4. Build for Production

To bundle and minify assets for deployment:
```bash
npm run build
```

This compiles optimized bundles to the `dist/` directory.

---

### 5. Preview Production Build

To locally test the production build from `dist/`:
```bash
npm run preview
```

---

## ✏️ How to Customize Portfolio Content

All personal data, metrics, projects, and links are managed in a single file:
👉 **`src/data/portfolioData.js`**

| Section to Update | Property in `portfolioData.js` |
| :--- | :--- |
| **Profile & Bio** | `portfolioData.profile` (Name, CGPA, Roles, Bio) |
| **Disciplines** | `portfolioData.disciplines` (Pillars & descriptions) |
| **Featured Project** | `portfolioData.featuredProject` (Detailed case study) |
| **Project Showcase** | `portfolioData.projects` (List of projects & case studies) |
| **Technical Skills** | `portfolioData.skills` (Languages, tools, frameworks) |
| **Leadership** | `portfolioData.leadership` (Roles & achievements) |
| **Education** | `portfolioData.education` (Degrees & credentials) |
| **Social Links & Email** | `portfolioData.contact.socials` (GitHub, LinkedIn, YouTube, Email) |

Any edit in `portfolioData.js` automatically propagates across all components.

---

## ☁️ Deployment Guide

### Deploying to Vercel

This project is fully pre-configured for instant deployment on [Vercel](https://vercel.com).

#### Option A: Deploy via Vercel Dashboard (Recommended)
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the `MyPortfolio` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**. Your site will be live on `https://<your-project>.vercel.app`.

#### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

### Deploying to GitHub Pages

A GitHub Actions workflow is included at `.github/workflows/static.yml`. To enable GitHub Pages:
1. Navigate to your repository on GitHub.
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Pushes to the `main` branch will automatically deploy.

---

## 👨‍💻 Author & Contact

**MD Nazmul Hasan Fahim**  
*Software Engineering Student • Programmer • Educator • Student Leader*

- **Live Portfolio (Vercel):** [nazmul-fahim-portfolio.vercel.app](https://nazmul-fahim-portfolio.vercel.app)
- **GitHub:** [@nazmulfahim3010](https://github.com/nazmulfahim3010)
- **LinkedIn:** [linkedin.com/in/nazmulfahim3010](https://linkedin.com/in/nazmulfahim3010)
- **YouTube:** [@nazmulfahim3010](https://youtube.com/@nazmulfahim3010)
- **Email:** [nazmulfahim3010@gmail.com](mailto:nazmulfahim3010@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
