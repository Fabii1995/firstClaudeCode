import { useState, useEffect } from 'react'
import CategoryTabs from './components/CategoryTabs'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import styles from './App.module.css'
import { CATEGORIES } from './constants'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const [activeCategory, setActiveCategory] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(title, category) {
    setTodos([{ id: Date.now(), title, category, done: false, createdAt: new Date().toISOString() }, ...todos])
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

  // Progress: scoped to the active category
  const scopedTodos = todos.filter(t => activeCategory === 'all' || t.category === activeCategory)
  const doneCount = scopedTodos.filter(t => t.done).length
  const totalCount = scopedTodos.length
  const progressPct = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100)

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h1 className={styles.title}>My <span>Todos</span></h1>
          <p className={styles.subtitle}>{today}</p>
        </div>

        {/* Progress bar */}
        <div className={styles.progressWrapper}>
          <div className={styles.progressHeader}>
            <span>{doneCount} of {totalCount} completed</span>
            <strong>{progressPct}%</strong>
          </div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        <CategoryTabs
          categories={CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
        />

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
        </div>

        <TodoList todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <p className={styles.footer}>
          {todos.filter(t => !t.done).length} item{todos.filter(t => !t.done).length !== 1 ? 's' : ''} remaining
        </p>
      </div>
    </div>
  )
}

export default App
