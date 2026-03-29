import { useState } from 'react'
import { CATEGORIES } from '../constants'

const INPUT_CATEGORIES = CATEGORIES.filter(c => c.id !== 'all')

function AddTaskBar({ onAdd, activeCategory }) {
  const [title,    setTitle]    = useState('')
  const [category, setCategory] = useState(
    activeCategory !== 'all' ? activeCategory : 'work'
  )

  function handleAdd() {
    if (!title.trim()) return
    onAdd(title.trim(), category)
    setTitle('')
  }

  return (
    <div className="fixed bottom-0 left-0 w-full z-40 px-6 pb-8 bg-gradient-to-t from-background via-background/95 to-transparent pt-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-surface-container-high rounded-full p-2 flex items-center gap-2 shadow-2xl border border-white/5">

          {/* Category selector icon */}
          <div className="pl-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface-variant text-xl">add</span>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-xs text-on-surface-variant cursor-pointer outline-none"
            >
              {INPUT_CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id} className="bg-surface-container text-on-surface">
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          {/* Text input */}
          <input
            type="text"
            placeholder="Add new task to ledger..."
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleAdd()}
            className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm flex-1 text-on-surface placeholder:text-on-surface-variant/50 min-w-0"
          />

          {/* Commit button */}
          <button
            onClick={handleAdd}
            className="h-10 px-6 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-sm tracking-tight active:scale-95 transition-transform whitespace-nowrap flex-shrink-0"
          >
            Commit
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddTaskBar
