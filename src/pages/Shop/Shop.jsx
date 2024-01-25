import Card from '../../components/Card/Card';
import styles from './Shop.module.css';

export default function Shop() {
  return (
    <>
      <h1 className={styles.section}>SHOP</h1>
      <div className={styles.container}>
        <h2 className={styles.title}>SHOES</h2>
        <div className={styles.flex}>
          <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
        </div>
      </div>
    </>
  );
}
