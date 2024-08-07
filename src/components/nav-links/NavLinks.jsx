import user from '@/mock/user';

import Search from '@/assets/icons/search.svg?react';
import Gift from '@/assets/icons/gift.svg?react';
import Bell from '@/assets/icons/bell.svg?react';

import { IconButton } from '@/components/shared';

import './navLinks.scss';

const NavLinks = () => {
  const newNotifications = user?.notifications;

  return (
    <nav className="nav-links">
      <IconButton>
        <Search />
      </IconButton>
      <IconButton>
        <Gift />
      </IconButton>
      <IconButton
        className={`nav-links__notification ${newNotifications ? 'nav-links__notification--unread' : ''}`}
      >
        <Bell />
      </IconButton>
    </nav>
  );
};

export default NavLinks;
