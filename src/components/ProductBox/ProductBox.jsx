/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';

import styles from './ProductBox.module.css';
import Quantity from '../Quantity/Quantity';
import Button from '../Button/Button';

export default function ProductBox(props) {
  const { name, price, isInput } = props;
  const [quantity, setQuantity] = useState(0);
  const amount = price * quantity;

  function handleQuantity(e) {
    if (e.currentTarget.value === '-') {
      if (quantity > 0) setQuantity((q) => q - 1);
    } else if (quantity < 99) setQuantity((q) => q + 1);
  }

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
