import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Logo from '@/assets/icons/logo.svg?react';
import CloseCircle from '@/assets/icons/close-circle.svg?react';

import { IconButton } from '@/components/shared';
import routes from '@/router/routes';

import './sidebar.scss';

const Sidebar = (props) => {
  const { closeHandler } = props;

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeHandler();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeHandler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeHandler]);

  return (
    <aside className="sidebar" ref={sidebarRef}>
      <div className="sidebar__header">
        <Logo />
        <IconButton onClick={closeHandler}>
          <CloseCircle />
        </IconButton>
      </div>

      <div className="sidebar__body">
        {routes.map(route => (
          <a
            key={route.path}
            href={route.path}
            className="sidebar__body__link"
          >
            {route.title}
          </a>
        ))}
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  closeHandler: PropTypes.func,
};

export default Sidebar;
