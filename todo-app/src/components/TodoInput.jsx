import { useState } from 'react'
import { CATEGORIES } from '../constants'
import styles from './TodoInput.module.css'

// The non-"all" categories for the dropdown (can't add a todo to "All")
const INPUT_CATEGORIES = CATEGORIES.filter(c => c.id !== 'all')

function TodoInput({ onAdd, activeCategory }) {
  const [title, setTitle] = useState('')
  // Pre-select the active category tab, falling back to 'work'
  const [category, setCategory] = useState(
    activeCategory !== 'all' ? activeCategory : 'work'
  )

  function handleAdd() {
    if (!title.trim()) return
    onAdd(title.trim(), category)
    setTitle('')
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        maxLength={200}
      />
      <select
        className={styles.select}
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        {INPUT_CATEGORIES.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.label}</option>
        ))}
      </select>
      <button className={styles.addBtn} onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}

export default TodoInput
