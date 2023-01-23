import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/error-page';
import { useTodos } from './hooks';
import { Root } from './routes/root';
import { TodosPage } from './routes/todos';
import { AddTodo } from './routes/todos/add-todo';

const router = (todos: ReturnType<typeof useTodos>) =>
  createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: (
            <TodosPage
              {...{
                filteredTodos: todos.filteredTodos,
                handleSearch: todos.handleSearch,
              }}
            />
          ),
        },
        {
          path: '/add',
          element: <AddTodo {...{ addTodo: todos.addTodo }} />,
        },
      ],
    },
  ]);

export const App = () => {
  const todos = useTodos();
  return <RouterProvider router={router(todos)} />;
};
