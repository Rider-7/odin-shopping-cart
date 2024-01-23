import { Link } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import styles from './Template.module.css';

export default function Template(props) {
  const { children } = props;
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>Boutique</Link>
        <Nav />
      </header>
      {children}
    </>
  );
}
