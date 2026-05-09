import { useDispatch, useSelector } from 'react-redux'
import { setFilter, clearCompleted } from '../features/todos/todosSlice'
import { selectFilter, selectActiveCount } from '../features/todos/todosSelectors'

const FILTERS = ['all', 'active', 'completed']

export default function FilterBar() {
  const dispatch = useDispatch()
  const currentFilter = useSelector(selectFilter)
  const activeCount = useSelector(selectActiveCount)

  return (
    <div className="filter-bar">
      <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
      <div className="filter-buttons">
        {FILTERS.map(f => (
          <button
            key={f}
            className={currentFilter === f ? 'active' : ''}
            onClick={() => dispatch(setFilter(f))}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <button onClick={() => dispatch(clearCompleted())}>
        Clear Completed
      </button>
    </div>
  )
}