import Plus from '@/assets/icons/plus.svg?react';
import ArrowDown from '@/assets/icons/arrow-down.svg?react';

import { IconButton } from '@/components/shared';

import user from '@/mock/user';

import './userProfile.scss';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile__balance-btn">
        <p>{user.balance} $</p>
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
