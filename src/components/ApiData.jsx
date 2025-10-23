// src/components/ApiData.jsx
import React, { useEffect, useState } from 'react'

const ApiData = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const tasksPerPage = 2

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()

        const simpleTasks = data.slice(0, 5).map((task, index) => ({
          ...task,
          title: [
            'Buy groceries',
            'Clean the room',
            'Finish homework',
            'Call a friend',
            'Water the plants'
          ][index],
        }))
        setTasks(simpleTasks)
      } catch (err) {
        setError('Failed to fetch tasks')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Loading tasks...</p>
  if (error) return <p className="text-red-500">{error}</p>

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastTask = currentPage * tasksPerPage
  const indexOfFirstTask = indexOfLastTask - tasksPerPage
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask)
  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage)

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value)
          setCurrentPage(1)
        }}
        className="w-full p-2 rounded border dark:bg-gray-600 dark:text-gray-100"
      />

      {/* Tasks List */}
      {currentTasks.map(task => (
        <div
          key={task.id}
          className="p-4 border rounded shadow-sm bg-gray-50 dark:bg-gray-700 hover:scale-105 transition-transform duration-200"
        >
          <h3 className="font-bold">{task.title}</h3>
          <p>
            Status:{' '}
            <span
              className={task.completed ? 'text-green-500 font-semibold' : 'text-yellow-500 font-semibold'}
            >
              {task.completed ? 'Completed' : 'Pending'}
            </span>
          </p>
        </div>
      ))}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex space-x-2 justify-center mt-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-2 py-1 bg-gray-300 dark:bg-gray-600 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-2 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600'}`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-2 py-1 bg-gray-300 dark:bg-gray-600 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default ApiData