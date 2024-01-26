import { useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

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

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useOutletContext().cartState;
  let { cartIdRef } = useOutletContext();
  const dialog = useRef();

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
    setQuantity(1);
  }

  function closeDialog() {
    if (dialog.current.open) dialog.current.close();
    setQuantity(1);
  }

  return (
    <dialog id="modal" className={styles.dialog} ref={dialog}>
      <div className={styles.flex}>
        <Product imgUrl={imgUrl} name={name} description={description} price={price} />
        <ProductBox isInput name="Product Name" price={price} quantity={quantity} handleQuantity={handleQuantity} />
        <Footer closeDialog={closeDialog} addToCart={addToCart} />
      </div>
    </dialog>
  );
}

function Product(props) {
  const {
    imgUrl,
    name,
    description,
    price
  } = props;

  return (
    <div className={styles.product}>
      <Screen imgUrl={imgUrl} />
      <Information name={name} description={description} price={price} />
    </div>
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

function Footer(props) {
  const { closeDialog, addToCart } = props;

  return (
    <div className={styles.buttons}>
      <Button theme="default-theme" modifier="small" onClick={closeDialog}>BACK</Button>
      <Button theme="pink-theme" modifier="small" onClick={addToCart}>ADD TO CART</Button>
    </div>
  );
}
