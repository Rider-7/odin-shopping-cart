import ProductBox from '../../../components/ProductBox/ProductBox';
import Quantity from '../../../components/Quantity/Quantity';
import Button from '../../../components/Button/Button';

import styles from './ProductList.module.css';

export default function ProductList(props) {
  const { cart, setCart } = props;

  function removeProduct(e) {
    const uid = parseInt(e.currentTarget.dataset.uid, 10);
    setCart(cart.filter((product) => product.uid !== uid));
  }

  let List;
  let final = 0;

  if (cart.length <= 0) {
    List = <span>Cart is Empty</span>;
  } else {
    List = cart.map((product) => {
      final += (product.price * product.quantity);
      return (
        <ProductBox
          key={product.uid}
          uid={product.uid}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          onClick={removeProduct}
        />
      );
    });
  }

  return (
    <div className={styles['product-list']}>
      {List}
      <div className={styles.total}><Quantity name="TOTAL" value={`$${final}`} /></div>
      <Button className={styles.checkout}>CHECKOUT</Button>

    </div>
  );
}
