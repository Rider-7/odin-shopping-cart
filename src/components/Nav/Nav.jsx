import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import ButtonStyles from '../Button/Button.module.css';
import cartSVG from '../../assets/icon/cart.svg';

import styles from './Nav.module.css';

export default function Nav() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Boutique</Link>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/shop">Shop</Link>
        <Link className={styles.link} to="/contact">Contact</Link>
        <Link to="/cart">
          <Button
            icon={cartSVG}
            alt="cart"
            style={ButtonStyles.number}
            theme={ButtonStyles['pink-theme']}
          />
        </Link>
      </nav>
    </header>
  );
}
