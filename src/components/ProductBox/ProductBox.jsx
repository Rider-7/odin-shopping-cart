/* eslint-disable react/jsx-one-expression-per-line */
import styles from './ProductBox.module.css';
import Quantity from '../Quantity/Quantity';

export default function ProductBox(props) {
  const { name, price } = props;

  const quantity = 3;
  const amount = price * quantity;
  return (
    <div className={styles.box}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.quantities}>
        <div className={styles.left}>
          <Quantity name="Quantity" />
          <Quantity name="Unit Price" value={`$${price}`} />
        </div>
        <Quantity name="Amount" value={`$${amount}`} />
      </div>
    </div>
  );
}
