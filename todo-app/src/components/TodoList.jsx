import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon}>✦</span>
        <span className={styles.emptyText}>Nothing here. Add something above.</span>
      </div>
    )
  }

  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList
