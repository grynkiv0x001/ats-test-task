import PropTypes from 'prop-types';

import './input.scss';

const Input = (props) => {
  const { type = 'text', className = '' } = props;

  return (
    <input
      {...props}
      type={type}
      className={`input ${className}`}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
