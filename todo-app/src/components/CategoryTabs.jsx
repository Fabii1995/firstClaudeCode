function CategoryTabs({ categories, active, onChange }) {
  return (
    <nav className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-1">
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
            active === cat.id
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  )
}

export default CategoryTabs
