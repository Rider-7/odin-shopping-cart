import { useOutletContext } from 'react-router-dom';

import ProductList from './ProductList/ProductList';

import styles from './Cart.module.css';

export default function Cart() {
  const [cart, setCart] = useOutletContext().cartState;

  return (
    <>
      <h1 className={styles.title}>CART</h1>
      <div className={styles.cart}>
        <ProductList cart={cart} setCart={setCart} />
      </div>
    </>
  );
}
