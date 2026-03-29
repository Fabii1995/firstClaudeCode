import { CATEGORIES } from '../constants'
import styles from './Sidebar.module.css'

function Sidebar({ todos, activeCategory, onCategoryChange }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  const doneCount = todos.filter(t => t.done).length
  const totalCount = todos.length
  const progressPct = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100)

  // Count todos per category
  const countFor = (id) =>
    id === 'all'
      ? todos.length
      : todos.filter(t => t.category === id).length

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <h1 className={styles.title}>My <span>Todos</span></h1>
        <p className={styles.date}>{today}</p>
      </div>

      <div className={styles.progress}>
        <div className={styles.progressHeader}>
          <span>{doneCount} of {totalCount} completed</span>
          <strong>{progressPct}%</strong>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <nav className={styles.nav}>
        <p className={styles.navLabel}>Categories</p>
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`${styles.navItem} ${activeCategory === cat.id ? styles.navItemActive : ''}`}
            style={activeCategory === cat.id ? { color: cat.color, borderColor: cat.color + '44', background: cat.color + '11' } : {}}
            onClick={() => onCategoryChange(cat.id)}
          >
            <span
              className={styles.dot}
              style={{ background: activeCategory === cat.id ? cat.color : '#1f2f50' }}
            />
            <span className={styles.navLabel2}>{cat.label}</span>
            <span className={styles.count}>{countFor(cat.id)}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
