import Filter from '@/assets/icons/filter.svg?react';

import { Button, IconButton } from '@/components/shared';

import './transactions.scss';

const Transactions = () => {
  return (
    <div className="transactions">
      <h3 className="transactions__title transactions__title--mobile">
        Transactions

        <IconButton className="transactions__filter-btn">
          <Filter />
        </IconButton>
      </h3>
      <h2 className="transactions__title transactions__title--desktop">
        Last Transactions

        <IconButton className="transactions__filter-btn">
          <Filter />
        </IconButton>
      </h2>

      <Button>Show more</Button>
    </div>
  );
};

export default Transactions;
