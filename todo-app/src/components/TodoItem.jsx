import { CATEGORIES } from '../constants'
import styles from './TodoItem.module.css'

function TodoItem({ todo, onToggle, onDelete }) {
  const cat = CATEGORIES.find(c => c.id === todo.category)

  return (
    <li className={`${styles.item} ${todo.done ? styles.done : ''}`}>

      {/* Custom checkbox */}
      <label className={styles.checkboxWrapper}>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span className={styles.checkmark} />
      </label>

      <span className={styles.title}>{todo.title}</span>

      <span
        className={styles.badge}
        style={{ background: cat?.color + '22', color: cat?.color }}
      >
        {cat?.label}
      </span>

      <button className={styles.deleteBtn} onClick={() => onDelete(todo.id)}>
        ✕
      </button>
    </li>
  )
}

export default TodoItem
