
# Mohan Karthikeyan - DevOps Engineer Portfolio

A modern, responsive portfolio website showcasing my DevOps engineering expertise, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Futuristic cyberpunk-themed interface with neon accents
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Form**: Integrated with backend service for message handling
- **Professional Showcase**: Detailed experience, skills, and project sections

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- Tailwind CSS
- Vite
- Shadcn/ui Components
- Lucide React Icons

**Backend:**
- Python Flask
- Telegram Bot API Integration
- CORS enabled for cross-origin requests

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Projects.tsx    # Projects showcase
│   ├── Resume.tsx      # Resume page
│   ├── Contact.tsx     # Contact form
│   └── NotFound.tsx    # 404 page
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## 🔧 Setup & Installation

### Frontend (GitHub Pages)

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohankarthikeyan7/mk-portfolio.git
   cd mk-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

### Backend (Render.com)

1. **Create a new Web Service on Render.com**

2. **Connect your GitHub repository**

3. **Set up environment variables in Render.com:**
   ```
   TELEGRAM_TOKEN=your_telegram_bot_token
   TELEGRAM_CHAT_ID=your_telegram_chat_id
   ```

4. **Configure build settings:**
   - **Build Command:** `pip install -r requirements.txt`
   - **Start Command:** `gunicorn app:app`
   - **Python Version:** 3.9+

5. **Deploy the service**

## 📧 Contact Form Configuration

### Backend Setup

The contact form uses a Flask backend hosted on Render.com that:
- Accepts POST requests to `/form-submit`
- Processes form data (name, email, message)
- Sends formatted messages to Telegram via Bot API
- Returns JSON responses with success/error status

### Telegram Bot Setup

1. **Create a Telegram Bot:**
   - Message @BotFather on Telegram
   - Use `/newbot` command
   - Get your bot token

2. **Get Chat ID:**
   - Start a chat with your bot
   - Send a message to your bot
   - Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Find your chat ID in the response

3. **Set Environment Variables:**
   ```
   TELEGRAM_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   ```

### Frontend Integration

The contact form sends POST requests to:
```
https://mk-portfolio-form-backend.onrender.com/form-submit
```

Payload format:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Subject: Inquiry\n\nHello from the contact form!"
}
```

## 🎨 Design Features

- **Futuristic Theme**: Dark backgrounds with neon blue, purple, and cyan accents
- **Floating Animations**: DevOps commands and symbols with staggered delays
- **Glass Morphism**: Semi-transparent cards with backdrop blur effects
- **Neon Glow**: Text shadows and box shadows for cyberpunk aesthetic
- **Typing Animations**: Animated command-line text effects

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Friendly**: Adapted layouts for medium screens
- **Desktop Enhanced**: Full-featured experience on large screens

## 🔒 Security

- **CORS Enabled**: Proper cross-origin resource sharing configuration
- **Environment Variables**: Sensitive data stored securely
- **Input Validation**: Form data validation on both frontend and backend
- **Error Handling**: Graceful error handling with user feedback

## 🚀 Deployment

### GitHub Pages (Frontend)
- Automatic deployment on push to main branch
- Custom domain support available
- SSL certificate included

### Render.com (Backend)
- Automatic deployments from GitHub
- Environment variable management
- Free tier available with limitations
- Auto-scaling and monitoring included

## 📈 Performance

- **Optimized Bundle**: Tree-shaking and code splitting
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Compressed and properly sized images
- **Caching**: Browser caching for static assets

## 🔄 CI/CD Pipeline

- **GitHub Actions**: Automated testing and deployment
- **Code Quality**: ESLint and Prettier integration
- **Type Safety**: TypeScript for enhanced development experience

## 📞 Support

For any questions or issues:
- **Email**: mohankarthick52@gmail.com
- **LinkedIn**: [mohan-karthick](https://www.linkedin.com/in/mohan-karthick)
- **GitHub**: [mohankarthikeyan7](https://github.com/mohankarthikeyan7)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
