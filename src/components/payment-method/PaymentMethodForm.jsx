import { useState } from 'react';
import PropTypes from 'prop-types';

import Arrow from '@/assets/icons/arrow-down.svg?react';
import Close from '@/assets/icons/close.svg?react';

import user from '@/mock/user';
import { formatCurrency } from '@/helpers';

import { Button, IconButton, Input } from '@/components/shared';

import PaymentMethodSelect from './PaymentMethodSelect';

const MAX_VALUE = 906;

const addBy = [10, 20, 30, 50, 100];

const PaymentMethodForm = (props) => {
  const { handleClose, selectedMethod } = props;

  const [values, setValues] = useState({
    amount: 0,
    promo: '',
    method: selectedMethod.id,
  });

  const handleChange = (value, name) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const formattedBalance = formatCurrency(user.balance, 'USD');

  return (
    <form className="payment-method-form">
      <div className="payment-method-form__header">
        <button
          className="payment-method-form__header__back-btn"
          onClick={handleClose}
        >
          <Arrow />
          Back to Payment Method
        </button>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </div>
      <div className="payment-method-form__balance">
        Current Balance: <strong>{formattedBalance}</strong>
      </div>
      <div className="payment-method-form__body">
        <PaymentMethodSelect
          handleChange={handleChange}
          methodId={values.method}
        />
        <h3 className="payment-method-form__title">
          Amount
        </h3>
        <div className="payment-method-form__amount">
          <Input
            type="number"
            placeholder="Enter amount here"
            className="payment-method-form__amount__input"
            value={values.amount}
            max={MAX_VALUE}
            onChange={(e) => handleChange(e.target.value, 'amount')}
          />
          <div className="payment-method-form__amount__list">
            {addBy.map(value => (
              <button
                key={value}
                className="payment-method-form__amount__add-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  handleChange(value, 'amount');
                }}
              >
              + ${value}
              </button>
            ))}
          </div>
          <p className="payment-method-form__amount__label">
            From {values.amount} to {MAX_VALUE} USD at a time
          </p>
        </div>
        <h3>Promo Code</h3>
        <div className="payment-method-form__promo">
          <Input
            type="text"
            placeholder="Enter promo code here"
            className="payment-method-form__promo__input"
            value={values.promo}
            onChange={(e) => handleChange(e.target.value, 'promo')}
          />
          <Button
            className="promo__form__submit"
            disabled={!values.promo}
          >
            Apply
          </Button>
        </div>
      </div>
      <Button className="payment-method-form__submit-btn">
        Deposit
      </Button>
    </form>
  );
};

PaymentMethodForm.propTypes = {
  handleClose: PropTypes.func,
  selectedMethod: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    logo: PropTypes.string,
    comission: PropTypes.number,
    label: PropTypes.string,
  })
};

export default PaymentMethodForm;
