import { useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import styles from './Modal.module.css';

import Button from '../../../components/Button/Button';
import Box from '../Box/Box';

export default function Modal(props) {
  const {
    id,
    imgUrl,
    name,
    description,
    price,
  } = props;

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useOutletContext().cartState;
  let { cartIdRef } = useOutletContext();
  const modal = useRef();

  function closeModal() {
    if (modal.current.open) modal.current.close();
    setQuantity(1);
  }

  function handleQuantity(e) {
    if (e.currentTarget.value === '-') {
      if (quantity > 1) setQuantity((q) => q - 1);
    } else if (quantity < 99) setQuantity((q) => q + 1);
  }

  function addToCart() {
    setCart([
      ...cart,
      {
        uid: cartIdRef.current,
        id,
        name,
        price,
        quantity,
      },
    ]);
    cartIdRef.current += 1;
    closeModal();
  }

  return (
    <dialog id="modal" className={styles.dialog} ref={modal}>
      <div className={styles.content}>
        <img className={styles.image} src={imgUrl} alt="" />
        <div className={styles.information}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <Box name={name} price={price} quantity={quantity} handleQuantity={handleQuantity} />
      <div className={styles.controls}>
        <Button className={styles.button} onClick={closeModal}>BACK</Button>
        <Button className={styles.button} onClick={addToCart}>ADD TO CART</Button>
      </div>
    </dialog>
  );
}
