import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button(props) {
  const {
    icon,
    alt,
    children,
    ...rest
  } = props;

  return (
    <button type="button" { ...rest }>
      {icon !== null && <img className={styles.img} src={icon} alt={alt} />}
      {children !== null && children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  alt: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  icon: null,
  alt: null,
};
