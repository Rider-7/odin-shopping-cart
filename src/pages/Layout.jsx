import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import styles from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
