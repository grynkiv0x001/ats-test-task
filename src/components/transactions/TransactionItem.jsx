import PropTypes from 'prop-types';

import { formatCurrency, formatDate } from '@/helpers';

const TransactionItem = (props) => {
  const { transaction } = props;
  const {
    id,
    method,
    date,
    amount,
    status,
    currency,
  } = transaction;

  const formattedAmount = formatCurrency(amount, currency);
  const formattedDate = formatDate(date);

  return (
    <div className="transaction-item">
      <div className="transaction-item__header">
        <img
          src={`/src/assets/payment-options-logo/${method.logo}.svg`}
          alt="Payment method logo"
          className="transaction-item__header__logo"
        />
        <div className="transaction-item__status">
          <p className={`transaction-item__status--${status}`}>
            {status}
          </p>
          <span className="transaction-item__label">
            Operation Status
          </span>
        </div>
      </div>
      <div className="transaction-item__row">
        <div className="transaction-item__cell transaction-item__cell--united">
          <div
            className="transaction-item__cell transaction-item__cell--desktop transaction-item__cell--img-holder"
          >
            <img
              src={`/src/assets/payment-options-logo/${method.logo}.svg`}
              alt="Payment method logo"
              className="transaction-item__header__logo"
            />
          </div>
          <div className="transaction-item__cell">
            <p className="transaction-item__cell__title">
              by {method.name}, {currency}
            </p>
            <span className="transaction-item__label">
              Withdraw
            </span>
          </div>
        </div>
        <div className="transaction-item__cell">
          <p className="transaction-item__cell__title">
            {id}
          </p>
          <span className="transaction-item__label">
            Transaction Number
          </span>
        </div>
        <div className="transaction-item__cell">
          <p className="transaction-item__cell__title">
            {formattedDate}
          </p>
          <span className="transaction-item__label">
            Payment Date
          </span>
        </div>
        <div className="transaction-item__cell">
          <p className="transaction-item__cell__title">
            {formattedAmount}
          </p>
          <span className="transaction-item__label">
            Amount Payed
          </span>
        </div>
        <div
          className="transaction-item__cell transaction-item__cell--desktop"
        >
          <div className="transaction-item__status">
            <p className={`transaction-item__status--${status}`}>
              {status}
            </p>
            <span className="transaction-item__label">
              Operation Status
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number,
    method: PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string,
    }),
    date: PropTypes.string,
    amount: PropTypes.number,
    status: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};

export default TransactionItem;
