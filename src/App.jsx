import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'

export default function App() {
  return (
    <div className="app">
      <h1>Redux Todo App</h1>
      <AddTodo />
      <TodoList />
      <FilterBar />
    </div>
  )
}