import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-content py-20 gap-3 text-on-surface-variant">
        <span className="material-symbols-outlined text-4xl opacity-30">task_alt</span>
        <p className="font-headline text-lg font-bold tracking-tight opacity-40">Nothing here yet</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TodoList
