import PropTypes from 'prop-types';

import Logo from '@/assets/logo.svg?react';
import Menu from '@/assets/menu.svg?react';
import Plus from '@/assets/plus.svg?react';
import ArrowDown from '@/assets/arrow-down.svg?react';

import user from '@/mock/user';

import { IconButton } from '@/components/shared';

import './header.scss';

const Header = (props) => {
  const { openSidebar } = props;

  return (
    <header className="header">
      <IconButton onClick={openSidebar}>
        <Menu />
      </IconButton>
      <div>
        <Logo />
      </div>
      <div>
        125.02 $
        <div>13%</div>
        <IconButton>
          <ArrowDown />
        </IconButton>
        <IconButton>
          <Plus />
        </IconButton>
      </div>

      <div>
        <img src={user.profile.image} />
      </div>
    </header>
  );
};

Header.propTypes = {
  openSidebar: PropTypes.func.isRequired,
};

export default Header;
