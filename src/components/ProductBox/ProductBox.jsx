/* eslint-disable react/jsx-one-expression-per-line */

import styles from './ProductBox.module.css';
import Quantity from '../Quantity/Quantity';
import Button from '../Button/Button';

export default function ProductBox(props) {
  const { name, price, quantity, isInput, handleQuantity } = props;

  const amount = price * quantity;
  return (
    <div className={styles.box}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.quantities}>
        <div className={styles.left}>
          <Quantity name="Quantity" value={quantity} />
          { isInput && (
            <>
              <Button modifier="small" value="-" onClick={handleQuantity}>-</Button>
              <Button modifier="small" value="+" onClick={handleQuantity}>+</Button>
            </>
          )}
          <Quantity name="Unit Price" value={`$${price}`} />
        </div>
        <Quantity name="Amount" value={`$${amount}`} />
      </div>
    </div>
  );
}

ProductBox.propTypes = {

};

ProductBox.defaultProps = {
  isInput: false,
};
