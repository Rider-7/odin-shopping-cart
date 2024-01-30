import { useState } from 'react';

import styles from './Shop.module.css';

import Card from '../../components/Card/Card';
import Modal from './Modal/Modal';

// Temporary data
import products from '../../assets/data/products.json';

export default function Shop() {
  const [overlay, setOverlay] = useState(<Modal />);

  // Avoid using HTML dialog tag next time when creating dialog components,
  // Too hacky to get '.showModal()' to work.
  function selectProduct(e) {
    const id = parseInt(e.currentTarget.dataset.id, 10);
    const product = products.find((p) => p.id === id);
    const productModal = (
      <Modal
        id={product.id}
        name={product.title}
        price={product.price}
        description={product.description}
        imgUrl={product.image}
      />
    );
    setOverlay(productModal);
    document.getElementById('modal').showModal();
  }

  const List = products.map((product) => (
    <Card
      key={product.id}
      dataId={product.id}
      theme={styles['default-theme']}
      name={product.title}
      price={product.price}
      imgUrl={product.image}
      onClick={selectProduct}
    />
  ));

  return (
    <>
      <h1 className={styles.title}>SHOP</h1>
      <div className={styles.grid}>
        {List}
      </div>
      {overlay}
    </>
  );
}
