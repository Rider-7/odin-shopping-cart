import styles from './Cart.module.css';
import Button from '../../components/Button/Button';
import ButtonStyles from '../../components/Button/Button.module.css';

export default function Cart() {
  return (
    <>
      <h1 className={styles.section}>SHOP</h1>
      <div className={styles.cart}>
        <div className={styles.list}>
          <div className={styles.product}>
            <div>Product Name</div>
            <div>Quantity</div>
            <div>Unit Price</div>
            <div>Final Price</div>
          </div>
          <div className={styles.product}>
            <div>Product Name</div>
            <div>Quantity</div>
            <div>Unit Price</div>
            <div>Final Price</div>
          </div>
        </div>
        <div className={styles.checkout}>
          <div>Total Price</div>
          <Button theme={ButtonStyles['pink-theme']} style={ButtonStyles.small}>GO TO CHECKOUT</Button>
        </div>
      </div>
    </>
  );
}