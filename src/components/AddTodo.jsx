import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'

export default function AddTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text.trim()))
      setText('')
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}