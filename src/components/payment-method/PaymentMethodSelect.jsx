import { useState } from 'react';
import PropTypes from 'prop-types';

import Arrow from '@/assets/icons/arrow-down.svg?react';

import { cards, crypto } from '@/mock/payment-options';

const PaymentMethodSelect = (props) => {
  const { handleChange, methodId = 1 } = props;
  const methods = cards.concat(crypto);

  const [isOpen, setIsOpen] = useState(false);

  const selectedMethod = methods
    .find((method) => method.id === methodId);

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsOpen(!isOpen);
  };

  const handleOptionClick = (id) => {
    handleChange(id, 'method');
    setIsOpen(false);
  };

  return (
    <div className={`payment-method-select ${isOpen ? 'payment-method-select--opened' : ''}`}>
      <button
        className="payment-method-select__trigger"
        onClick={toggleDropdown}
      >
        <div className="payment-method-select__trigger__left">
          <img
            src={`/public/payment-options-logo/${selectedMethod.logo}.svg`}
            alt="Selected method logo"
            className="payment-method-select__logo"
          />
          <div className="payment-method-select__info">
            <p>
              {selectedMethod.title}
              {!!selectedMethod?.currency && (
                <>, {selectedMethod.currency}</>
              )}
              {!!selectedMethod?.comission && (
                <> • Comission {selectedMethod.comission}%</>
              )}
            </p>
            <span>
              Please notice that you will send money in the {' '}
              {selectedMethod?.currency}
            </span>
          </div>
        </div>
        <Arrow
          className={`payment-method-select__trigger__icon ${isOpen ? 'payment-method-select__trigger__icon--rotated' : ''}`}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="payment-method-select__options"
        >
          {methods.map((method) => (
            <li
              key={method.id}
              role="option"
              className={`payment-method-select__option ${methodId === method.id ? 'payment-method-select__option--selected' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation;

                handleOptionClick(method.id);
              }}
            >
              {method.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

PaymentMethodSelect.propTypes = {
  handleChange: PropTypes.func.isRequired,
  methodId: PropTypes.number.isRequired,
};

export default PaymentMethodSelect;
