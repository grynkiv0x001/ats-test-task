import PropTypes from 'prop-types';

import './iconButton.scss';

const IconButton = (props) => {
  const { children } = props;

  return (
    <button {...props} className="icon-button">
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node,
};

export default IconButton;
