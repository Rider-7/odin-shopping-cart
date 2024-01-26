import { useState } from 'react';


import styles from './Shop.module.css';

import Card from '../../components/Card/Card';
import Dialog from '../../components/Dialog/Dialog';

// Temporary data
import products from '../../assets/data/products.json';

export default function Shop() {
  const [Modal, setModal] = useState(<Dialog />);

  // Avoid using HTML dialog tag next time when creating dialog components,
  // Too hacky to get '.showModal()' to work.
  function selectProduct(e) {
    const id = parseInt(e.currentTarget.dataset.id, 10);
    const product = products.find((p) => p.id === id);
    const productModal = (
      <Dialog
        id={product.id}
        name={product.title}
        price={product.price}
        description={product.description}
        imgUrl={product.image}
      />
    );
    setModal(productModal);
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
      <h1 className={styles.section}>SHOP</h1>
      <div className={styles.container}>
        <h2 className={styles.title}>SHOES</h2>
        <div className={styles.flex}>
          {List}
        </div>
      </div>
      {Modal}
    </>
  );
}
