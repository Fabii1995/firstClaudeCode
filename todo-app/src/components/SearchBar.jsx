function SearchBar({ value, onChange }) {
  return (
    <div className="relative mb-8">
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
        search
      </span>
      <input
        type="text"
        placeholder="Search tasks..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-surface-container-lowest border-b border-outline-variant/20 py-4 pl-10 pr-10 focus:outline-none focus:border-primary transition-colors text-on-surface placeholder:text-on-surface-variant/50 text-sm"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      )}
    </div>
  )
}

export default SearchBar
