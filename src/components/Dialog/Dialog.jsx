import { useRef } from 'react';
import styles from './Dialog.module.css';

import ProductBox from '../ProductBox/ProductBox';
import Button from '../Button/Button';
import Quantity from '../Quantity/Quantity';

export default function Dialog(props) {
  const {
    imgUrl,
    name,
    description,
    price,
  } = props;

  const dialog = useRef();

  function close() {
    if (dialog.current.open) dialog.current.close();
  }

  return (
    <dialog id="modal" className={styles.dialog} ref={dialog}>
      <div className={styles.flex}>
        <div className={styles.product}>
          <div className={styles.screen}>
            <img className={styles.image} src={imgUrl} alt="" />
          </div>
          <div className={styles.information}>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.description}>
              {description}
            </p>
            <span className={styles.price}><Quantity value={`$${price}`} /></span>
          </div>
        </div>
        <ProductBox name="Product Name" />
        <div className={styles.buttons}>
          <Button theme="default-theme" modifier="small" onClick={close}>BACK</Button>
          <Button theme="pink-theme" modifier="small">ADD TO CART</Button>
        </div>
      </div>
    </dialog>
  );
}
