import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './components/error-page';
import { Root } from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
