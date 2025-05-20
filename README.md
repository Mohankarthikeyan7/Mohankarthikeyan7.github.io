
# Mohan Karthikeyan - DevOps Engineer Portfolio

A professional portfolio website showcasing skills, projects, and experience in DevOps engineering.

## Project Overview

This portfolio is built with:
- **Frontend**: React with TypeScript, Tailwind CSS, Shadcn/UI components
- **Hosting**: GitHub Pages

## Features

- Responsive modern design optimized for all devices
- Interactive project showcase with filtering
- Resume view and download functionality
- Contact form with form validation
- Professional DevOps-focused presentation

## Development Setup

### Prerequisites

- Node.js (v16+)
- Git

### Frontend Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository
1. Create a new repository on GitHub (e.g., `your-username.github.io` or `portfolio`)
2. Initialize Git and add your repository as remote:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Configure for GitHub Pages
1. Add the homepage field to package.json:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/REPO_NAME"
   ```
   (If using your-username.github.io as the repo name, use "homepage": "https://YOUR_USERNAME.github.io")

2. Add the following scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Install the gh-pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

### Step 3: Deploy the Site
1. Run the deploy command:
   ```bash
   npm run deploy
   ```

2. Go to your GitHub repository settings:
   - Navigate to "Settings" > "Pages"
   - Source should be set to "gh-pages" branch
   - Wait a few minutes for your site to be published

3. Your portfolio is now live at: `https://YOUR_USERNAME.github.io/REPO_NAME`

## Updating Your Resume

1. Replace the file at `public/resume/mohan_karthikeyan_cv.pdf` with your updated resume
2. Ensure the filename remains the same for consistent links
3. Commit and push the changes to your repository
4. Redeploy if needed: `npm run deploy`

## Contact

- Email: mohankarthick52@gmail.com
- Phone: +44-7407036084
- Location: Liverpool, UK (Open for Relocation)

## License

MIT License

