import { useState, useEffect } from 'react'
import { CATEGORIES } from './constants'
import CategoryStats from './components/CategoryStats'
import SearchBar from './components/SearchBar'
import CategoryTabs from './components/CategoryTabs'
import TodoList from './components/TodoList'
import AddTaskBar from './components/AddTaskBar'

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
    if (!title.trim()) return
    setTodos([
      { id: Date.now(), title: title.trim(), category, done: false, createdAt: new Date().toISOString() },
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

  const doneCount  = todos.filter(t => t.done).length
  const totalCount = todos.length
  const progressPct = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100)
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

  return (
    <div className="bg-background min-h-screen pb-40 font-body">

      {/* Top App Bar */}
      <header className="sticky top-0 z-40 bg-[#0e0e0e] flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary-container">menu</span>
          <h1 className="font-headline font-bold tracking-tighter text-xl text-primary-container uppercase">
            Digital Ledger
          </h1>
        </div>
        <div className="w-9 h-9 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant text-sm font-bold">
          <span className="material-symbols-outlined text-[20px]">person</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-10">

        {/* Hero */}
        <section className="mb-10">
          <div className="flex justify-between items-end mb-5">
            <div>
              <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-1">{today}</p>
              <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface">
                Your Ledger
              </h2>
            </div>
            <div className="text-right">
              <span className="font-headline text-4xl font-bold text-primary">{progressPct}%</span>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-0.5">Completed</p>
            </div>
          </div>

          {/* Global progress bar */}
          <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden mb-8">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          {/* Category stats bento grid */}
          <CategoryStats todos={todos} />
        </section>

        {/* Search */}
        <SearchBar value={search} onChange={setSearch} />

        {/* Category filter tabs */}
        <CategoryTabs
          categories={CATEGORIES}
          active={activeCategory}
          onChange={setActiveCategory}
        />

        {/* Status filter row */}
        <div className="flex items-center gap-2 mb-6">
          {['all', 'active', 'done'].map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                statusFilter === s
                  ? 'bg-surface-container-high text-on-surface'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {s}
            </button>
          ))}
          <span className="ml-auto text-xs text-on-surface-variant">
            {todos.filter(t => !t.done).length} remaining
          </span>
        </div>

        {/* Todo list */}
        <TodoList todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>

      {/* Floating add task bar */}
      <AddTaskBar onAdd={addTodo} activeCategory={activeCategory} />
    </div>
  )
}

export default App
