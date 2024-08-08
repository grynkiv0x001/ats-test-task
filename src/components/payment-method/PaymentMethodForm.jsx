import Arrow from '@/assets/icons/arrow-down.svg?react';
import Close from '@/assets/icons/close.svg?react';

import { Button, IconButton } from '@/components/shared';

import Promo from '@/components/promo/Promo';

const PaymentMethodForm = () => {
  return (
    <form className="payment-method-form">
      <div className="payment-method-form__header">
        <button className="payment-method-form__header__back-btn">
          <Arrow />
          Back to Payment Method
        </button>
        <IconButton>
          <Close />
        </IconButton>
      </div>
      <div className="payment-method-form__body">
        <Promo />
      </div>
      <Button className="payment-method-form__submit-btn">
        Deposit
      </Button>
    </form>
  );
};

export default PaymentMethodForm;
