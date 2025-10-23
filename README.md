# React Task Manager

A modern task management application built with React, demonstrating component architecture, responsive design, and API integration.

![App Screenshot](./screenshots/app-preview.png)

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE.md)  [![Vite](https://img.shields.io/badge/Vite-4.0-blue)](https://vitejs.dev)

## 🌟 Features

* Responsive design for mobile, tablet, and desktop views
* Dark/Light theme toggle using Context API
* Task management with CRUD operations
* Dynamic API data fetching and display
* Reusable component architecture
* Modern UI with Tailwind CSS
* React Router for navigation
* Optional: API search/filter and pagination

## 🚀 Live Demo

[View Live Demo](https://your-deployed-app-url.com)

## 💻 Tech Stack

* React 18
* React Router v6
* Tailwind CSS
* Context API
* Vite
* JSON Placeholder API

## 📋 Prerequisites

* Node.js (v14 or higher)
* npm or yarn

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/react-task-manager.git
```

2. Navigate to project directory

```bash
cd react-task-manager
```

3. Install dependencies

```bash
npm install
```

4. Start development server

```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

6. Build production version (optional)

```bash
npm run build
npm run preview
```

## 📱 Screenshots

### Home Page

![Home Page](./screenshots/home.png)

### Task Management

![Tasks Page](./screenshots/tasks.png)

### API Data & Dark Mode

![Dark Mode](./screenshots/dark-mode.png)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── TaskManager.jsx
│   └── ApiData.jsx
├── context/
│   └── ThemeContext.jsx
├── pages/
│   ├── Home.jsx
│   └── Tasks.jsx
├── layout/
│   └── Layout.jsx
├── App.jsx
└── main.jsx
```

## 🛠️ Usage

### Theme Toggle

```jsx
import { useTheme } from './context/ThemeContext';

const { theme, toggleTheme } = useTheme();
<button onClick={toggleTheme}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
```

### Adding Tasks

```jsx
<TaskManager onAdd={(task) => handleAddTask(task)} />
```

### API Data Display

```jsx
<ApiData /> // Fetches first 5 tasks and displays status
```

## 📝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👏 Acknowledgments

* [Tailwind CSS](https://tailwindcss.com)
* [React Icons](https://react-icons.github.io/react-icons)
* [JSON Placeholder](https://jsonplaceholder.typicode.com)

## 📧 Contact

Your Name - [Email](mailto:your.email@example.com) | [LinkedIn](https://linkedin.com/in/yourprofile) | [Twitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/react-task-manager](https://github.com/yourusername/react-task-manager)
