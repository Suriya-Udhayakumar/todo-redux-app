export const selectAllTodos = state => state.todos.items

export const selectFilter = state => state.todos.filter

export const selectActiveCount = state =>
  state.todos.items.filter(t => !t.completed).length

export const selectFilteredTodos = state => {
  const { items, filter } = state.todos
  if (filter === 'active') return items.filter(t => !t.completed)
  if (filter === 'completed') return items.filter(t => t.completed)
  return items
}