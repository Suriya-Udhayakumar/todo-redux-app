import { createSlice, nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    filter: 'all',
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload)
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
            createdAt: new Date().toISOString(),
          },
        }
      },
    },
    toggleTodo(state, action) {
      const todo = state.items.find(t => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    deleteTodo(state, action) {
      state.items = state.items.filter(t => t.id !== action.payload)
    },
    editTodo(state, action) {
      const { id, text } = action.payload
      const todo = state.items.find(t => t.id === id)
      if (todo) todo.text = text
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
    clearCompleted(state) {
      state.items = state.items.filter(t => !t.completed)
    },
  },
})

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  setFilter,
  clearCompleted,
} = todosSlice.actions

export default todosSlice.reducer