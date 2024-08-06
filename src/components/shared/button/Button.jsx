import PropTypes from 'prop-types';

import './button.scss';

const Button = (props) => {
  const { children } = props;

  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
