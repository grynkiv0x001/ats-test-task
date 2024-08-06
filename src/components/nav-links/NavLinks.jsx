import Search from '@/assets/icons/search.svg?react';
import Gift from '@/assets/icons/gift.svg?react';
import Bell from '@/assets/icons/bell.svg?react';

import { IconButton } from '@/components/shared';

import './navLinks.scss';

const NavLinks = () => {
  return (
    <nav className="nav-links">
      <IconButton>
        <Search />
      </IconButton>
      <IconButton>
        <Gift />
      </IconButton>
      <IconButton>
        <Bell />
      </IconButton>
    </nav>
  );
};

export default NavLinks;
