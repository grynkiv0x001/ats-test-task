import Plus from '@/assets/icons/plus.svg?react';
import ArrowDown from '@/assets/icons/arrow-down.svg?react';

import { formatCurrency } from '@/helpers';

import { IconButton } from '@/components/shared';

import user from '@/mock/user';

import './userProfile.scss';

const UserProfile = () => {
  const formattedCurrency = formatCurrency(user.balance, 'USD');

  return (
    <div className="user-profile">
      <div className="user-profile__balance-btn">
        <p>{formattedCurrency}</p>
        <div className="balance-btn--rate">
          {user.rate}%
        </div>
        <IconButton>
          <ArrowDown />
        </IconButton>
        <IconButton className="balance-btn--add">
          <Plus />
        </IconButton>
      </div>
      <div className="user-profile__photo">
        <img src={user.profile.image} />
      </div>
    </div>
  );
};

export default UserProfile;
