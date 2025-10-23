// src/pages/Home.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import ApiData from '../components/ApiData'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to My Task Manager
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Manage your tasks efficiently with our simple and intuitive app.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="primary" onClick={() => navigate('/tasks')}>
            Get Started
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Main Cards Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card
          title="Introduction"
          className="hover:scale-105 transition-transform duration-200"
        >
          This app demonstrates React component architecture, Tailwind CSS styling, hooks usage and API integration.
        </Card>

        <Card
          title="Features"
          className="hover:scale-105 transition-transform duration-200"
        >
          <ul className="list-disc ml-5 space-y-1">
            <li>Reusable Buttons, Cards, Navbar, Footer</li>
            <li>Responsive design for mobile, tablet, desktop</li>
            <li>Dark/Light mode toggle using Context</li>
            <li>Task Manager component with add, delete, filter</li>
          </ul>
        </Card>

        <Card
          title="Quick Actions"
          className="hover:scale-105 transition-transform duration-200"
        >
          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
            <Button
              variant="primary"
              onClick={() => navigate('/tasks')}
            >
              Go to Tasks
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                if (window.confirm('Are you sure you want to delete example tasks?')) {
                  alert('Example tasks deleted!')
                }
              }}
            >
              Delete Example
            </Button>
          </div>
        </Card>

        {/* API Data Card with fixed height */}
        <Card
          title="API Data"
          className="hover:scale-105 transition-transform duration-200 max-h-96 overflow-y-auto"
        >
          <ApiData limit={5} />
        </Card>

        <Card
          title="Tips"
          className="hover:scale-105 transition-transform duration-200"
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Use the Navbar links to navigate between Home and Tasks. Toggle dark mode using the button in the Navbar.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Home