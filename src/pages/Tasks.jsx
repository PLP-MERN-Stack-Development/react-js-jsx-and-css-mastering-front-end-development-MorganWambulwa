// src/pages/Tasks.jsx
import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState('All')

  // Load tasks from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(saved)
  }, [])

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (!newTask.trim()) return
    setTasks([...tasks, { text: newTask, completed: false }])
    setNewTask('')
  }

  const toggleComplete = (index) => {
    const updated = [...tasks]
    updated[index].completed = !updated[index].completed
    setTasks(updated)
  }

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index)
    setTasks(updated)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true
    if (filter === 'Active') return !task.completed
    if (filter === 'Completed') return task.completed
  })

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center">Tasks Page</h1>

      <Card title="Add New Task">
        <div className="flex space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a task"
            className="flex-grow p-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <Button variant="primary" onClick={addTask}>Add</Button>
        </div>
      </Card>

      <Card title="Filter Tasks">
        <div className="flex space-x-2">
          {['All', 'Active', 'Completed'].map((f) => (
            <Button
              key={f}
              variant={filter === f ? 'primary' : 'secondary'}
              onClick={() => setFilter(f)}
            >
              {f}
            </Button>
          ))}
        </div>
      </Card>

      <Card title="Task List">
        {filteredTasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          <ul className="space-y-2">
            {filteredTasks.map((task, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-2 border rounded dark:border-gray-600 ${
                  task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
                }`}
              >
                <span>{task.text}</span>
                <div className="space-x-2">
                  <Button variant="secondary" onClick={() => toggleComplete(index)}>
                    {task.completed ? 'Undo' : 'Complete'}
                  </Button>
                  <Button variant="danger" onClick={() => deleteTask(index)}>Delete</Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  )
}

export default Tasks