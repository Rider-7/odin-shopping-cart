import { useEffect, useRef } from 'react';
import styles from './Dialog.module.css';
import ProductBox from '../ProductBox/ProductBox';
import Button from '../Button/Button';

export default function Dialog() {
  const dialog = useRef();

  useEffect(() => {
    dialog.current.showModal();
  }, [dialog]);

  return (
    <dialog className={styles.dialog} ref={dialog}>
      <div className={styles.grid}>
        <div className={styles.screen}>
          {/* <img className={styles.image} src={testIMG} alt="" /> */}
        </div>
        <div className={styles.information}>
          <div className={styles.name}>Lorem ipsum dolor sit amet</div>
          <div className={styles.description}>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className={styles.price}></div>
        </div>
        <ProductBox name="Product Name" />
        <div className={styles.button}><Button theme="pink-theme" modifier="small">ADD TO CART</Button></div>
      </div>
    </dialog>
  );
}
