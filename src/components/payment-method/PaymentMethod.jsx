import { useEffect, useState } from 'react';

import { cards, crypto } from '@/mock/payment-options';
import { Popup } from '@/components/shared';

import PaymentMethodItem from './PaymentMethodItem';
import PaymentMethodForm from './PaymentMethodForm';

import './paymentMethod.scss';

const PaymentMethod = () => {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [selectMethod, setSelectedMethod] = useState(null);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div className="payment-method">
      {showPaymentPopup && (
        <>
          {isMobile ? (
            <PaymentMethodForm />
          ) : (
            <Popup
              closeHandler={() => setShowPaymentPopup(false)}
              showCloseBtn={false}
            >
              <PaymentMethodForm />
            </Popup>
          )}
        </>
      )}

      <h3>Choose Payment Method</h3>

      <section className="payment-method__section">
        <h4 className="payment-method__section__title">
          Cards, E-money, PIN
        </h4>

        <div className="payment-method__section__body">
          {cards.map(item => (
            <PaymentMethodItem
              key={item.id}
              card={item}
              openPaymentPopup={() => setShowPaymentPopup(true)}
              handleSelect={() => setSelectedMethod(item)}
            />
          ))}
        </div>
      </section>

      <section className="payment-method__section">
        <h4 className="payment-method__section__title">
          Cryptocurrency
        </h4>

        <div className="payment-method__section__body">
          {crypto.map(item => (
            <PaymentMethodItem
              key={item.id}
              card={item}
              openPaymentPopup={() => setShowPaymentPopup(true)}
              handleSelect={() => setSelectedMethod(item)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PaymentMethod;
