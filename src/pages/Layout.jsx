import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import Header from '../components/Header/Header';

export default function Layout() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header />
      <Outlet context={[cart, setCart]} />
    </>
  );
}
