import PropTypes from 'prop-types';

import './iconButton.scss';

const IconButton = (props) => {
  const { children, className } = props;

  return (
    <button {...props} className={`icon-button ${className}`}>
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
};

export default IconButton;
