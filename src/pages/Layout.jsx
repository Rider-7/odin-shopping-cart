import { Outlet } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import Header from '../components/Header/Header';

export default function Layout() {
  let cartInit = JSON.parse(localStorage.getItem('cart'));
  if (!cartInit) cartInit = [];

  const [cart, setCart] = useState(cartInit);
  const cartId = useRef(0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
