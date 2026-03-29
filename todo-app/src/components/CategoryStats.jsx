import { CATEGORIES } from '../constants'

// Shows a 2-column bento grid with per-category completion stats
function CategoryStats({ todos }) {
  const statCategories = CATEGORIES.filter(c => c.id !== 'all')

  return (
    <div className="grid grid-cols-2 gap-3">
      {statCategories.map(cat => {
        const total = todos.filter(t => t.category === cat.id).length
        const done  = todos.filter(t => t.category === cat.id && t.done).length
        const pct   = total === 0 ? 0 : Math.round((done / total) * 100)

        return (
          <div
            key={cat.id}
            className="bg-surface-container-low p-5 rounded-xl flex flex-col justify-between h-28"
          >
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-sm" style={{ color: cat.color }}>
                {cat.icon}
              </span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
                {cat.label}
              </span>
            </div>
            <div>
              <div className="text-xl font-bold font-headline mb-2 text-on-surface">
                {done}/{total}
              </div>
              <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: cat.color }}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryStats
