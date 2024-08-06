import PropTypes from 'prop-types';

import Logo from '@/assets/icons/logo.svg?react';
import Menu from '@/assets/icons/menu.svg?react';

import { IconButton } from '@/components/shared';
import UserProfile from '@/components/user-profile/UserProfile';
import NavLinks from '@/components/nav-links/NavLinks';

import './header.scss';

const Header = (props) => {
  const { openSidebar } = props;

  return (
    <header className="header">
      <div className="header__left">
        <IconButton onClick={openSidebar}>
          <Menu />
        </IconButton>
        <div>
          <Logo />
        </div>
      </div>
      <div className="header__right">
        <NavLinks />
        <UserProfile />
      </div>
    </header>
  );
};

Header.propTypes = {
  openSidebar: PropTypes.func.isRequired,
};

export default Header;
