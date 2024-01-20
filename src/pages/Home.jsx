import { Link } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Button from '../components/Button/Button';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>Boutique</Link>
        <Nav />
      </header>
      <div className={styles.hero}>
        <div className={styles.container}>
          <span className={`${styles.logo} ${styles.large}`}>Boutique</span>
          <div className={styles['button-menu']}><Button>GO SHOP</Button></div>
        </div>
      </div>
    </>
  );
}
