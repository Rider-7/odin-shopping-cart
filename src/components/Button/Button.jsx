import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button(props) {
  const {
    style,
    theme,
    icon,
    alt,
    children,
  } = props;

  return (
    <button className={`${style} ${theme}`} type="button">
      {icon !== null && <img src={icon} alt={alt} />}
      {children !== null && children}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string,
  alt: PropTypes.string,
};

Button.defaultProps = {
  style: styles.button,
  theme: styles['default-theme'],
  children: null,
  icon: null,
  alt: null,
};
