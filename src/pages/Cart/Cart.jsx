import styles from './Cart.module.css';
import Button from '../../components/Button/Button';
import ProductBox from '../../components/ProductBox/ProductBox';
import Quantity from '../../components/Quantity/Quantity';

export default function Cart() {
  return (
    <>
      <h1 className={styles.section}>CART</h1>
      <div className={styles.cart}>
        <div className={styles.list}>
          <ProductBox name="Adidas" />
          <ProductBox name="Air Jordans" />
          <div className={styles.final}>
            <Quantity name="FINAL" value="$899.99" />
          </div>
          <div className={styles.button}>
            <Button theme="pink-theme" modifier="small">CHECKOUT</Button>
          </div>
        </div>
      </div>
    </>
  );
}