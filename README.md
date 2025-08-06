# DateNow - Frontend 💕

A modern dating application built with React, Firebase, and AI-powered chat features. Find your perfect match and connect with people through intelligent conversations.

> **Note**: This is the frontend repository. The backend is hosted separately at [DateNow-Backend](https://github.com/yourusername/DateNow-Backend). You need to clone and run both repositories for the complete application.

## 🌟 Features

- **AI-Powered Chat**: Intelligent conversation assistance using Google's Gemini AI
- **Real-time Messaging**: Socket.io integration for instant communication
- **Firebase Authentication**: Secure user authentication and management
- **Modern UI**: Beautiful interface built with React and Tailwind CSS
- **Responsive Design**: Works seamlessly across all devices
- **Match System**: Smart matching algorithm to find compatible partners
- **Email Integration**: Contact and notification system via EmailJS
- **Profile Management**: Comprehensive user profile system

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS + DaisyUI
- **Authentication**: Firebase Auth
- **AI Integration**: Google Gemini API
- **Real-time Communication**: Socket.io Client
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: GSAP
- **Email Service**: EmailJS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/DateNow-Frontend.git
cd DateNow-Frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add your environment variables:

```bash
cp .env.example .env
```

Fill in your environment variables (see Environment Variables section below).

### 4. Backend Configuration

You have two options for the backend:

#### Option 1: Use Hosted Backend (Recommended for Quick Start)
```env
VITE_BACKEND_URL=https://datenow-backend.onrender.com
```

> **⚠️ Important**: The hosted backend may take 1-2 minutes to start up if it hasn't been used recently (cold start). Please be patient when first loading the application.

#### Option 2: Local Backend Setup
If you want to run the backend locally:
1. Clone the backend repository: `git clone https://github.com/yourusername/DateNow-Backend.git`
2. Follow the backend setup instructions in its README
3. Use: `VITE_BACKEND_URL=http://localhost:9000`

### 5. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🔧 Environment Variables

Create a `.env` file with the following variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Google Gemini AI
VITE_GEMINI_API_KEY=your_gemini_api_key

# Backend URL
VITE_BACKEND_URL=https://datenow-backend.onrender.com
```

## 🔑 API Keys Setup

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Authentication and choose sign-in methods
4. Go to Project Settings → General → Your apps
5. Add a web app if you haven't already
6. Copy the config object values to your `.env` file

### Google Gemini API Setup

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Create a new API key
4. Copy the API key to your `.env` file as `VITE_GEMINI_API_KEY`

```bash

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── about/          # About page component
│   ├── chat/           # AI chat components
│   ├── contact/        # Contact form components
│   ├── details/        # User details components
│   ├── footer/         # Footer component
│   ├── home/           # Home page components
│   ├── login/          # Authentication components
│   ├── match/          # Matching system components
│   ├── navbar/         # Navigation components
│   └── talk/           # Real-time chat components
├── context/            # React context providers
├── assets/             # Static assets (images, icons)
├── App.jsx             # Main App component
├── main.jsx            # Application entry point
├── auth.js             # Firebase authentication config
└── Layout.jsx          # Layout wrapper component
```


## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation when necessary
- Ensure all environment variables are documented

## 🐛 Troubleshooting

### Common Issues

**Backend Connection Issues**
- **Hosted Backend**: If you're getting connection errors, wait 1-2 minutes for the backend to wake up from cold start
- **Local Backend**: Verify backend is running on port 9000
- Check CORS configuration
- Validate API endpoints

**Firebase Authentication Error**
- Verify your Firebase configuration
- Check if authentication methods are enabled
- Ensure domain is added to authorized domains

**API Connection Issues**
- If using hosted backend (`https://datenow-backend.onrender.com`): Wait for cold start (1-2 minutes)
- If using local backend: Verify it's running on correct port
- Check network connectivity
- Validate environment variables

### Backend Status Check
Visit `https://datenow-backend.onrender.com` in your browser. You should see a message confirming the server is running.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Lead Developer**: Anurag Yadav

## 🙏 Acknowledgments

- Firebase for authentication services
- Google for Gemini AI
- React community for amazing tools
- All contributors who help improve this project

---

Made with ❤️ by the DateNow team
```

## Technologies Used

- **Vite**: A fast and modern frontend build tool.
- **React**: A JavaScript library for building user interfaces.
- **Google Gemini API**: Used to facilitate chat interactions with users.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Set up .env File

In the project root directory, create a `.env` file. Inside `.env`, add the following line and replace `your_api_key_here` with your actual Gemini API key:

```plaintext
VITE_GEMINI_API_KEY=your_api_key_here
```

How to Get Your Google Gemini API Key
To get your Google Gemini API key, follow these steps:

Go to the Google AI Studio website.
Sign in with your Google account.
Navigate to the Generative AI section and create a new project or use an existing one.
Once your project is set up, generate an API key from the API & Services section.
Copy the generated API key and paste it into your .env file under VITE_GEMINI_API_KEY.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   