import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import cartSVG from '../../assets/icon/cart.svg';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Boutique</Link>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/shop">Shop</Link>
        <Link to="/cart">
          <Button
            icon={cartSVG}
            alt="cart"
            modifier="number"
            theme="pink-theme"
          />
        </Link>
      </nav>
    </header>
  );
}
