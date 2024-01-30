import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Layout from './Layout/Layout';
import Cart from './Cart/Cart';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/shop', element: <Shop /> },
        { path: '/cart', element: <Cart /> },
      ],
    },

  ]);
  return <RouterProvider router={router} />;
}
