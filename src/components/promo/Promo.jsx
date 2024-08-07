import { Button } from '@/components/shared';

import './promo.scss';

const Promo = () => {
  return (
    <div className="promo">
      <h3>Have a Promo Code?</h3>
      <p className="promo__subtitle">
        Enter promo code here. It will activate a special bonus!
      </p>

      <form className="promo__form">
        <input type="text" className="promo__form__input" />
        <Button className="promo__form__submit">Apply</Button>
      </form>
    </div>
  );
};

export default Promo;
