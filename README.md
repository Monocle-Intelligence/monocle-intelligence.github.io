# Monocle Intelligence Website

This is a Vite-based React application built with TypeScript, featuring a sophisticated spatial intelligence aesthetic, glassmorphism UI, and dark-theme focus.

## Getting Started

1. Navigate into the application directory:
   ```bash
   cd monocle
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Available Scripts

In the `monocle` directory, you can run the following commands:

- **Start Local Development Server:**  
  ```bash
  npm run dev
  ```  
  *Boots up the Vite dev server for hot-reloading components.*

- **Build for Production:**  
  ```bash
  npm run build
  ```  
  *Performs a complete TypeScript compilation check followed by generating static files into `/dist`.*

- **Deploy to GitHub Pages:**  
  ```bash
  npm run deploy
  ```  
  *Automatically builds the site and deploys the generated `dist/` directory (along with the custom `CNAME` for `monocle-intelligence.ai`) to the `gh-pages` branch.*

## Editing Content
All editable presentation text (Products data, Navigation details, Homepage messaging) is strictly decoupled from the UI markup. You can modify these values safely inside the `src/content/` directory. For stylistic theme changes, adjust `src/styles/variables.css`.
