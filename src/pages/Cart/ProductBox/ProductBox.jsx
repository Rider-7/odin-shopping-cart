import Quantity from '../../../components/Quantity/Quantity';
import Button from '../../../components/Button/Button';

import styles from './ProductBox.module.css';

export default function ProductBox(props) {
  const {
    uid,
    name,
    price,
    quantity,
    onClick,
  } = props;

  const amount = price * quantity;

  return (
    <div className={styles['product-box']}>
      <h2 className={styles.title}>{name}</h2>

      <div className={styles.units}>
        <Quantity name="Quantity" value={quantity} />
        <Quantity name="Unit Price" value={`$${price}`} />
      </div>
      <div className={styles.footer}>
        <Button data-uid={uid} type="button" onClick={onClick}>REMOVE</Button>
        <Quantity name="Amount" value={`$${amount}`} />
      </div>

    </div>
  );
}
