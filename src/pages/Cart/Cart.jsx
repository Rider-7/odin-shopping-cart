import { useOutletContext } from 'react-router-dom';

import styles from './Cart.module.css';

import Button from '../../components/Button/Button';
import ProductBox from '../../components/ProductBox/ProductBox';
import Quantity from '../../components/Quantity/Quantity';

export default function Cart() {
  const [cart, setCart] = useOutletContext().cartState;

  let final = 0;
  const List = cart.map((product) => {
    final += (product.price * product.quantity);
    return (
      <ProductBox
        key={product.uid}
        name={product.name}
        price={product.price}
        quantity={product.quantity}
      />
    );
  });

  return (
    <>
      <h1 className={styles.section}>CART</h1>
      <div className={styles.cart}>
        <div className={styles.list}>
          {List}
          <div className={styles.final}>
            <Quantity name="FINAL" value={`$${final}`} />
          </div>
          <div className={styles.button}>
            <Button theme="pink-theme" modifier="small">CHECKOUT</Button>
          </div>
        </div>
      </div>
    </>
  );
}