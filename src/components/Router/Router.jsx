import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../../pages/Home';
import Shop from '../../pages/Shop';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/shop',
      element: <Shop />,
    },
  ]);
  return <RouterProvider router={router} />;
}
