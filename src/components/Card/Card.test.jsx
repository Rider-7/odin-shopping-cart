import Card from './Card';
import styles from './Card.module.css';

export default function CardTests() {
  return (
    <Card theme={styles['default-theme']} name="Shoes" price="$12.49" />
  );

}