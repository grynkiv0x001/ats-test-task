import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import Close from '@/assets/icons/close.svg?react';

import { IconButton } from '@/components/shared';

import './popup.scss';

export const PopupPortal = (props) => {
  const elem = document.querySelector('.popup-portal');

  if (elem) {
    return createPortal(props.children, elem);
  }

  return false;
};

const Popup = (props) => {
  const {
    children,
    showCloseBtn = true,
    closeHandler = () => {},
    className = '',
  } = props;

  const contentRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        closeHandler();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeHandler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('eydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeHandler]);

  return (
    <PopupPortal>
      <div className="popup">
        <div className="popup__inner">
          <div className={`popup__content ${className}`} ref={contentRef}>
            {showCloseBtn && (
              <IconButton
                className="popup__close"
                onClick={closeHandler}
              >
                <Close />
              </IconButton>
            )}
            {children}
          </div>
        </div>
      </div>
    </PopupPortal>
  );
};

Popup.propTypes = {
  children: PropTypes.node,
  showCloseBtn: PropTypes.bool,
  closeHandler: PropTypes.func,
  className: PropTypes.string,
};

export default Popup;
