import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/error-page';
import { Root } from './routes/root';
import { TodosPage } from './routes/todos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <TodosPage />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
