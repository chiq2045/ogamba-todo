import { useCallback, useEffect, useState } from 'react';
import { Todo } from '../types';
import { TodoTile } from './components/todo-tile';
import { apiUrl } from './utils/constants';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  const getTodos = useCallback(async () => {
    return fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setTodos(data.todos))
      .catch((err) => console.error(err));
  }, []);

  const deleteTodo = (id: Todo['id']) => {
    setLoading(true);
    fetch(`${apiUrl}/${id}`, {
      method: 'delete',
    })
      .then(getTodos)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    getTodos().finally(() => setLoading(false));
  }, [getTodos]);

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
            <ul className='no-bullets'>
              {todos.length === 0 ? (
                <li className='text-gray-600'>No todos!</li>
              ) : null}
              {todos.map((todo) => (
                <li key={todo.id}>
                  <TodoTile
                    todo={todo}
                    handleDelete={() => deleteTodo(todo.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
