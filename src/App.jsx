import { Outlet } from "react-router-dom"
import Layout from "./layout/Layout"

function App() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Outlet /> {/* This renders the current page (Home or Tasks) */}

          {/* API data placeholder */}
          <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">API Data</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fetch and display data from an API here
            </p>
          </div>
        </main>

        <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Task Manager. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default App
