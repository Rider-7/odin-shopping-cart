import { useEffect, useRef } from 'react';
import styles from './Dialog.module.css';
import ProductBox from '../ProductBox/ProductBox';
import Button from '../Button/Button';
import Quantity from '../Quantity/Quantity';

import testIMG from '../../assets/image/hero.jpg';

export default function Dialog() {
  const dialog = useRef();

  useEffect(() => {
    dialog.current.showModal();
  }, [dialog]);

  return (
    <dialog className={styles.dialog} ref={dialog}>
      <div className={styles.flex}>
        <div className={styles.product}>
          <div className={styles.screen}>
            <img className={styles.image} src={testIMG} alt="" />
          </div>
          <div className={styles.information}>
            <h1 className={styles.name}>Lorem ipsum dolor sit amet</h1>
            <p className={styles.description}>
              consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className={styles.price}><Quantity value="$49.99" /></span>
          </div>
        </div>
        <ProductBox name="Product Name" />
        <div className={styles.buttons}>
          <Button theme="default-theme" modifier="small">BACK</Button>
          <Button theme="pink-theme" modifier="small">ADD TO CART</Button>
        </div>
      </div>
    </dialog>
  );
}
