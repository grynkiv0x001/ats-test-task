import { Button } from '@/components/shared';

import './promo.scss';

const Promo = () => {
  return (
    <div className="promo">
      <h2>Have a Promo Code?</h2>
      <p>Enter promo code here. It will activate a special bonus!</p>

      <Button>Apply</Button>
    </div>
  );
};

export default Promo;
