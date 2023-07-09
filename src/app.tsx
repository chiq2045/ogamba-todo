import { ChangeEventHandler, useState } from 'react'
import { TodoTile } from './components/todo-tile'
import { useDebounce } from 'usehooks-ts'
import { useTodos } from './utils/hooks'

export const App = () => {
  const { todos, loading, addTodo, deleteTodo } = useTodos()
  const [todoTitle, setTodoTitle] = useState('')

  const debouncedTodoTitle = useDebounce(todoTitle)

  const handleTodoTitleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTodoTitle(e.target.value)

  const handleAddTodo = () => {
    addTodo({ title: debouncedTodoTitle })
  }

  return (
    <div className="bg-gray-100 u-center h-100p">
      <div
        className="card u-round-md border-green-500 u-border-2"
        style={{
          height: '90%',
          width: '90%',
          overflow: 'scroll',
        }}
      >
        <div className="content mb-0">
          <div className="p-2">
            <div className="u-inline-flex u-items-center u-space-between u-flex-nowrap u-gap-2">
              <h1 className="text-xl">TooDoos</h1>
              {loading ? <p className="text-xl">Loading...</p> : null}
            </div>
            <div className="form-group">
              <label
                className="form-group-label"
                style={{ whiteSpace: 'nowrap' }}
              >
                New Todo
              </label>
              <input
                className="form-group-input"
                value={todoTitle}
                onChange={handleTodoTitleChange}
              />
              <button className="form-group-btn" onClick={handleAddTodo}>
                Add
              </button>
            </div>
            <ul className="no-bullets">
              {todos.size === 0 ? (
                <li className="text-gray-600">No todos!</li>
              ) : null}
              {[...todos].map(([id, todo]) => (
                <li key={id}>
                  <TodoTile todo={todo} handleDelete={() => deleteTodo(id)} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
