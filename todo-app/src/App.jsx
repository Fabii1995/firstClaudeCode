import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import SearchBar from './components/SearchBar'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import styles from './App.module.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  const [activeCategory, setActiveCategory] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(title, category) {
    setTodos([
      { id: Date.now(), title, category, done: false, createdAt: new Date().toISOString() },
      ...todos,
    ])
  }

  function toggleTodo(id) {
    setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  function deleteTodo(id) {
    setTodos(todos.filter(t => t.id !== id))
  }

  const visibleTodos = todos
    .filter(t => activeCategory === 'all' || t.category === activeCategory)
    .filter(t => statusFilter === 'all' || (statusFilter === 'done' ? t.done : !t.done))
    .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))

  const activeCount = todos.filter(t => !t.done).length

  return (
    <div className={styles.layout}>
      <Sidebar
        todos={todos}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className={styles.main}>
        <div className={styles.mainInner}>

          <SearchBar value={search} onChange={setSearch} />

          <TodoInput onAdd={addTodo} activeCategory={activeCategory} />

          <div className={styles.statusRow}>
            {['all', 'active', 'done'].map(s => (
              <button
                key={s}
                className={`${styles.statusBtn} ${statusFilter === s ? styles.statusActive : ''}`}
                onClick={() => setStatusFilter(s)}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
            <span className={styles.remaining}>
              {activeCount} remaining
            </span>
          </div>

          <TodoList
            todos={visibleTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
      </main>
    </div>
  )
}

export default App
