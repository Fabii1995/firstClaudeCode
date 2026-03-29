import { CATEGORIES } from '../constants'
import styles from './CategoryTabs.module.css'

function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className={styles.tabs}>
      {categories.map(cat => (
        <button
          key={cat.id}
          className={`${styles.tab} ${active === cat.id ? styles.tabActive : ''}`}
          style={active === cat.id ? { borderColor: cat.color, background: cat.color } : {}}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
