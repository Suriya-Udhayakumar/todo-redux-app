import { useSelector } from 'react-redux'
import { selectFilteredTodos } from '../features/todos/todosSelectors'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useSelector(selectFilteredTodos)

  if (todos.length === 0) {
    return <p className="empty-message">No todos found!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}