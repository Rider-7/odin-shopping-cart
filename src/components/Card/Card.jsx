import styles from './Card.module.css';

import testIMG from '../../assets/image/hero.jpg';

export default function Card(props) {
  const { theme, name, price } = props;

  return (
    <button type="button" className={`${styles.card} ${theme}`}>
      <img className={styles.image} src={testIMG} alt="" />
      <div className={styles.description}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </button>
  );
}