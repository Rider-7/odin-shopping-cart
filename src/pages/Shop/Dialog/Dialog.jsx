import { useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import styles from './Dialog.module.css';

import Button from '../../../components/Button/Button';

export default function Dialog(props) {
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
  const dialog = useRef();

  function closeDialog() {
    if (dialog.current.open) dialog.current.close();
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
    closeDialog();
  }

  return (
    <dialog id="modal" className={styles.dialog} ref={dialog}>
      <img className={styles.image} src={imgUrl} alt="" />
      <Information name={name} description={description} price={price} />
        {/* <ProductBox isInput name="Product Name" price={price} quantity={quantity} onClick={handleQuantity} />
        <Footer closeDialog={closeDialog} addToCart={addToCart} /> */}
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
    </div>
  );
}

function Footer(props) {
  const { closeDialog, addToCart } = props;

  return (
    <div className={styles.buttons}>
      <Button theme="default-theme" modifier="small" onClick={closeDialog}>BACK</Button>
      <Button theme="pink-theme" modifier="small" onClick={addToCart}>ADD TO CART</Button>
    </div>
  );
}
