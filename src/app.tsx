import { useEffect, useState } from 'react';
import { Todo } from '../types';
import { AddTodoModal } from './components/add-todo-modal';
import { TodoTile } from './components/todo-tile';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [addTodo, setAddTodo] = useState(false);

  const handleAddTodo = () => {
    setAddTodo((add) => !add);
  };

  const updateTodos = (newTodo: Todo) => {
    setTodos((oldTodos) => [...oldTodos, newTodo]);
  };

  useEffect(() => {
    setLoading(true);
    fetch('/api/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className='bg-gray-100 u-center h-100p'>
      <div
        className='card u-round-md border-green-500 u-border-2'
        style={{
          height: '90%',
          width: '90%',
          overflow: 'scroll',
        }}
      >
        <div className='content mb-0'>
          <div className='p-2'>
            <div className='u-inline-flex u-items-center u-space-between u-flex-nowrap u-gap-2'>
              <h1 className='text-xl'>TooDoos</h1>
              {loading ? <p className='text-xl'>Loading...</p> : null}
            </div>
            <div className='u-flex u-justify-flex-end u-gap-1'>
              <button
                className='btn'
                onClick={() => {
                  handleAddTodo();
                  window.location.href = '/#add-todo-modal';
                }}
              >
                Add Todo
              </button>
            </div>
            <ul className='no-bullets'>
              {todos.length === 0 ? (
                <li className='text-gray-600'>No todos!</li>
              ) : null}
              {todos.map((todo, index) => (
                <li key={todo.id}>
                  <TodoTile todo={todo} lastTodo={index === todos.length - 1} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <AddTodoModal updateTodos={updateTodos} onClose={handleAddTodo} />
    </div>
  );
};
