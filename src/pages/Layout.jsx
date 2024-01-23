import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import styles from './Layout.module.css';

export default function Template(props) {
  const { section } = props;

  return (
    <>
      <Nav />
      { section && <h1 className={styles.section}>{section}</h1>}
      <Outlet />
    </>
  );
}
