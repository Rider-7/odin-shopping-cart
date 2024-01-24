/* eslint-disable react/jsx-one-expression-per-line */
import styles from './ProductBox.module.css';
import Quantity from '../Quantity/Quantity';

export default function ProductBox(props) {
  const { name } = props;
  return (
    <div className={styles.box}>
      <h2 className={styles.name}>{name}</h2>
      {/* <ul className={styles.list}>
        <li><b>Detail 1: </b>Lorem ipsum dolor sit amet</li>
        <li><b>Detail 2: </b>Consectetur adipiscing elit</li>
        <li><b>Detail 3: </b>Sed do eiusmod tempor</li>
      </ul> */}
      <div className={styles.quantities}>
        <div className={styles.left}>
          <Quantity name="Quantity" value="3" />
          <Quantity name="Unit Price" value="$49.99" />
        </div>
        <Quantity name="Amount" value="$499.99" />
      </div>
    </div>
  );
}
