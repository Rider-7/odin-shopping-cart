import styles from './Quantity.module.css';

export default function Quantity(props) {
  const { name, value } = props;
  return (
    <div className={styles.container}>
      <span>{`${name}:`}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
