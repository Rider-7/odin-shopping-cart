import styles from './Button.module.css';

import Button from './Button';
import cartSVG from '../../assets/icon/cart.svg';

export default function ButtonTests() {
  return (
    <>
      <Button icon={cartSVG} theme={styles['pink-theme']} style={styles.cart}>3</Button>
      <Button>text</Button>
      <Button>TEXT</Button>
      <Button style={styles.small}>text</Button>
      <Button style={styles.small}>TEXT</Button>
    </>
  );
}
