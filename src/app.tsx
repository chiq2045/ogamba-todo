import { useEffect, useState } from 'react';
import { Todo } from '../types';
import { TodoTile } from './components/todo-tile';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

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
      <div className='card u-round-md' style={{ width: 350, minHeight: 500 }}>
        <div className='content'>
          <div className='p-2'>
            <div className='u-inline-flex u-items-center u-space-between u-flex-nowrap u-gap-2'>
              <h1 className='text-xl'>Todos</h1>
              {loading ? <p className='text-xl'>Loading...</p> : null}
            </div>
            <ul className='no-bullets'>
              {todos.length === 0 ? (
                <li className='text-gray-600'>No todos!</li>
              ) : null}
              {todos.map((todo) => (
                <li key={todo.id}>
                  <TodoTile todo={todo} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
