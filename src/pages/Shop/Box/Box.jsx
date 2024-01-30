import Quantity from '../../../components/Quantity/Quantity';
import Button from '../../../components/Button/Button';

import styles from './Box.module.css';

export default function Box(props) {
  const {
    name,
    price,
    quantity,
    handleQuantity,
  } = props;

  const amount = price * quantity;

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>{name}</h2>

      <div className={styles.units}>
        <div className={styles.quantity}>
          <Quantity name="Quantity" value={quantity} />
          <Button onClick={handleQuantity} value="-">-</Button>
          <Button onClick={handleQuantity} value="+">+</Button>
        </div>
        <Quantity name="Unit Price" value={`$${price}`} />
      </div>
      <div className={styles.footer}>
        <Quantity name="Amount" value={`$${amount}`} />
      </div>

    </div>
  );
}
