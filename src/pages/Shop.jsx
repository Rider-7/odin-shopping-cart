import Template from './Template';
import Card from '../components/Card/Card';
import styles from './Shop.module.css';

export default function Shop() {
  return (
    <Template>
        <div className={styles.grid}>
          <h1 className={styles.title}>SHOES</h1>
          <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
          <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
          <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
          <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
          <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
        </div>
    </Template>
  );
}