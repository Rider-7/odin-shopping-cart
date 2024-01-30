import styles from './Card.module.css';

export default function Card(props) {
  const {
    theme,
    name,
    price,
    imgUrl,
    onClick,
    dataId,
  } = props;

  return (
    <button type="button" className={styles.card} onClick={onClick} data-id={dataId}>
      <img className={styles.image} src={imgUrl} alt="" />
      <div className={styles.description}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{`$${price}`}</div>
      </div>
    </button>
  );
}