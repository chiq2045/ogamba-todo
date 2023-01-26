import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/error-page';
import { useTodos } from './hooks';
import { Root } from './routes/root';
import { todosLoader, TodosPage } from './routes/todos';
import { AddTodo } from './routes/todos/add-todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: todosLoader,
        element: <TodosPage />,
      },
      {
        path: '/add',
        element: <AddTodo />,
      },
    ],
  },
]);

export const App = () => {
  const todos = useTodos();
  useEffect(() => {
    todos.getTodos();

    return () => {
      todos.cancelRequest();
    };
  }, []);
  return <RouterProvider router={router} />;
};
