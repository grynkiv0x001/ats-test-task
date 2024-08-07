import { cards, crypto } from '@/mock/payment-options';

import PaymentMethodItem from './PaymentMethodItem';

import './paymentMethod.scss';

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <h3>Choose Payment Method</h3>

      <section className="payment-method__section">
        <h4 className="payment-method__section__title">
          Cards, E-money, PIN
        </h4>

        <div className="payment-method__section__body">
          {cards.map(item => (
            <PaymentMethodItem key={item.id} card={item} />
          ))}
        </div>
      </section>

      <section className="payment-method__section">
        <h4 className="payment-method__section__title">
          Cryptocurrency
        </h4>

        <div className="payment-method__section__body">
          {crypto.map(item => (
            <PaymentMethodItem key={item.id} card={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PaymentMethod;
