import { Outlet } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import Header from '../components/Header/Header';

export default function Layout() {
  let cartInit = JSON.parse(localStorage.getItem('cart'));
  let cartIdInit = JSON.parse(localStorage.getItem('cartId'));
  if (!cartInit) cartInit = [];
  if (!cartIdInit) cartIdInit = 0;

  const [cart, setCart] = useState(cartInit);
  const cartId = useRef(cartIdInit);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartId', JSON.stringify(cartId.current));
  }, [cart]);

  return (
    <>
      <Header cart={cart} />
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
