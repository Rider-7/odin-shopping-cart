import Card from '../../components/Card/Card';
import styles from './Shop.module.css';

export default function Shop() {
  return (
    <div className={styles['grid-container']}>
      <h2 className={styles['grid-title']}>SHOES</h2>
      <div className={styles.grid}>
        <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
        <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
        <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
        <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
        <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
      </div>
    </div>
  );
}