import { CATEGORIES } from '../constants'

function TodoItem({ todo, onToggle, onDelete }) {
  const cat = CATEGORIES.find(c => c.id === todo.category)

  const createdDate = new Date(todo.createdAt)
  const today       = new Date()
  const yesterday   = new Date(today); yesterday.setDate(today.getDate() - 1)
  const tomorrow    = new Date(today); tomorrow.setDate(today.getDate() + 1)

  let dateLabel
  if (createdDate.toDateString() === today.toDateString())     dateLabel = 'Today'
  else if (createdDate.toDateString() === yesterday.toDateString()) dateLabel = 'Yesterday'
  else if (createdDate.toDateString() === tomorrow.toDateString()) dateLabel = 'Tomorrow'
  else dateLabel = createdDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })

  return (
    <div className={`group relative flex items-center gap-4 py-3 px-4 -mx-4 rounded-xl transition-colors hover:bg-surface-container-low ${todo.done ? 'opacity-50' : ''}`}>

      {/* Left color pill — shown on hover */}
      <div
        className="absolute left-0 w-1 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: cat?.color }}
      />

      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all active:scale-110 ${
          todo.done
            ? 'bg-primary'
            : 'border border-outline-variant/30'
        }`}
      >
        {todo.done && (
          <span
            className="material-symbols-outlined text-on-primary text-[16px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check
          </span>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium text-on-surface ${todo.done ? 'line-through' : ''}`}>
          {todo.title}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span
            className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
            style={{ background: cat?.color + '18', color: cat?.color }}
          >
            {cat?.label}
          </span>
          <span className="text-[10px] text-on-surface-variant uppercase">{dateLabel}</span>
        </div>
      </div>

      {/* Delete — shown on hover */}
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-red-400"
      >
        <span className="material-symbols-outlined text-[18px]">delete</span>
      </button>
    </div>
  )
}

export default TodoItem
