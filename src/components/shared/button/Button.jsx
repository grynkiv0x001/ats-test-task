import PropTypes from 'prop-types';

import './button.scss';

const Button = (props) => {
  const { children, className = '' } = props;

  return (
    <button {...props} className={`button ${className}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
