/* eslint-disable react/jsx-one-expression-per-line */

import styles from './ProductBox.module.css';
import Quantity from '../Quantity/Quantity';
import Button from '../Button/Button';

export default function ProductBox(props) {
  const {
    uid,
    name,
    price,
    quantity,
    isInput,
    isCart,
    onClick,
  } = props;

  const amount = price * quantity;
  return (
    <div className={styles.box}>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.quantities}>
        <div className={styles.left}>
          { isCart && <button data-uid={uid} type="button" onClick={onClick}>Remove</button>}
          <Quantity name="Quantity" value={quantity} />
          { isInput && (
            <>
              <Button modifier="small" value="-" onClick={onClick}>-</Button>
              <Button modifier="small" value="+" onClick={onClick}>+</Button>
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
  isCart: false,
};
