import { useRef } from 'react';

import styles from './Dialog.module.css';

import ProductBox from '../ProductBox/ProductBox';
import Button from '../Button/Button';
import Quantity from '../Quantity/Quantity';

export default function Dialog(props) {
  const {
    id,
    imgUrl,
    name,
    description,
    price,
  } = props;

  const dialog = useRef();

  function closeDialog() {
    if (dialog.current.open) dialog.current.close();
  }

  function addToCart() {

  }

  return (
    <dialog id="modal" className={styles.dialog} ref={dialog}>
      <div className={styles.flex}>
        <div className={styles.product}>
          <Screen imgUrl={imgUrl} />
          <Information name={name} description={description} price={price} />
        </div>
        <ProductBox isInput name="Product Name" price={price} />
        <div className={styles.buttons}>
          <Button theme="default-theme" modifier="small" onClick={closeDialog}>BACK</Button>
          <Button theme="pink-theme" modifier="small" onClick={addToCart}>ADD TO CART</Button>
        </div>
      </div>
    </dialog>
  );
}

function Information(props) {
  const { name, description, price } = props;

  return (
    <div className={styles.information}>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.description}>
        {description}
      </p>
      <span className={styles.price}><Quantity value={`$${price}`} /></span>
    </div>
  );
}

function Screen(props) {
  const { imgUrl } = props;

  return (
    <div className={styles.screen}>
      <img className={styles.image} src={imgUrl} alt="" />
    </div>
  );
}