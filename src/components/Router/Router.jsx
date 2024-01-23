import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Shop from '../../pages/Shop/Shop';
import Layout from '../../pages/Layout';
// import Cart from '../../pages/Cart';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/shop', element: <Shop /> },
      ],
    },

  ]);
  return <RouterProvider router={router} />;
}
