import Card from '../../components/Card/Card';
import styles from './Shop.module.css';

// Temporary data
import products from '../../assets/data/products.json';

export default function Shop() {
  const List = products.map((product) => (
    <Card
      key={product.id}
      theme={styles['default-theme']}
      name={product.title}
      price={`$${product.price}`}
      imgUrl={product.image}
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
    </>
  );
}
