import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button(props) {
  const {
    modifier,
    theme,
    icon,
    alt,
    children,
    onClick,
    value,
  } = props;

  return (
    <button
      className={`${styles[modifier]} ${styles[theme]}`}
      type="button"
      onClick={onClick}
      value={value}
    >
      {icon !== null && <img src={icon} alt={alt} />}
      {children !== null && children}
    </button>
  );
}

Button.propTypes = {
  modifier: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  modifier: 'button',
  theme: 'default-theme',
  children: null,
  icon: null,
  alt: null,
  onClick: null,
  value: null,
};
