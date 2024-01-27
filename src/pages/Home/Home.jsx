import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

import styles from './Home.module.css';
import heroJPG from '../../assets/image/hero.jpg';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <span className={styles.logo}>Boutique</span>
        <div className={styles.menu}><Link className={styles.link} to="/shop"><Button className={styles.button}>GO SHOP</Button></Link></div>
      </div>
      <img className={styles.image} src={heroJPG} alt="" />
    </div>
  );
}
