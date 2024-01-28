import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Quantity.module.css';

export default function Quantity(props) {
  const { name, value } = props;

  return (
    <div className={styles.quantity}>
      { name && <span>{`${name}:`}</span>}
      <div className={styles.value}>{value}</div>
    </div>
  );
}

Quantity.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Quantity.defaultProps = {
  name: null,
  value: null,
};
