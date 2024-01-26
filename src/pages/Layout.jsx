import { Outlet } from 'react-router-dom';
import { useState, useRef } from 'react';

import Header from '../components/Header/Header';

export default function Layout() {
  const [cart, setCart] = useState([]);
  const cartId = useRef(0);

  return (
    <>
      <Header />
      <Outlet context={
        {
          cartState: [cart, setCart],
          cartIdRef: cartId,
        }
      }
      />
    </>
  );
}
