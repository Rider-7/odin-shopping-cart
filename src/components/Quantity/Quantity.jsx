import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Quantity.module.css';

export default function Quantity(props) {
  const { name, value } = props;

  return (
    <div className={styles.container}>
      { name && <span>{`${name}:`}</span>}
      <span className={styles.value}>{value}</span>
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
