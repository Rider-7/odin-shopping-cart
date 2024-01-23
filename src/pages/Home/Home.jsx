import Button from '../../components/Button/Button';
import styles from './Home.module.css';

import heroJPG from '../../assets/image/hero.jpg';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <span className={`${styles.logo} ${styles.large}`}>Boutique</span>
        <div className={styles['button-menu']}><Button>GO SHOP</Button></div>
      </div>
      <img className={styles.image} src={heroJPG} alt="" />
    </div>
  );
}
