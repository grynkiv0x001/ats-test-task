import transactions from '@/mock/transactions';
import { cards, crypto } from '@/mock/payment-options';

import Filter from '@/assets/icons/filter.svg?react';

import { Button, IconButton } from '@/components/shared';

import TransactionItem from './TransactionItem';
import './transactions.scss';

const Transactions = () => {
  const paymentOptions = cards.concat(crypto);

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

      <div className="transactions__list">
        {transactions.map(item => {
          const transactionMethod = paymentOptions
            .find(option => option.logo === item.method)
            .title;

          return (
            <TransactionItem
              key={item.id}
              transaction={{
                ...item,
                method: {
                  name: transactionMethod,
                  logo: item.method,
                },
              }}
            />
          );
        })}
      </div>

      <Button className="transactions__more-btn">
        Show more
      </Button>
    </div>
  );
};

export default Transactions;
