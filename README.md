
# Mohan Karthikeyan - DevOps Engineer Portfolio

A professional portfolio website showcasing skills, projects, and experience in DevOps engineering.

## Project Overview

This portfolio is built with:
- **Frontend**: React with TypeScript, Tailwind CSS
- **Backend**: Flask (Python)
- **Hosting Options**: GitHub Pages (frontend) and Render (full-stack)

## Features

- Responsive modern design optimized for all devices
- Interactive project showcase with filtering
- Resume view and download functionality
- Contact form with form validation
- Professional DevOps-focused presentation

## Development Setup

### Prerequisites

- Node.js (v16+)
- Python (v3.8+)
- Git

### Frontend Development

```bash
# Clone the repository
git clone https://github.com/mohankarthikeyan7/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Development

```bash
# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run Flask server
python app.py
```

## Deployment Instructions

### GitHub Pages (Frontend Only)

1. Update the `homepage` field in `package.json` to your GitHub Pages URL
2. Build the project: `npm run build`
3. Deploy to GitHub Pages: `npm run deploy`

### Render (Full Stack)

1. Create a new Web Service on Render
2. Connect your repository
3. Configure the following settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `gunicorn app:app`
4. Add environment variables if needed

## Updating Your Resume

1. Replace the file at `public/resume/mohan_karthikeyan_cv.pdf` with your updated resume
2. Ensure the filename remains the same for consistent links
3. Commit and push the changes to your repository

## Contact

- Email: mohankarthick52@gmail.com
- Phone: +44-7407036084
- Location: Liverpool, UK (Open for Relocation)

## License

MIT License
