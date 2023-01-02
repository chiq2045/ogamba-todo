import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>To Dos</h1>,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
