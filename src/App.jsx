import Header from '@/components/header/Header';
import PaymentMethod from '@/components/payment-method/PaymentMethod';
import Promo from '@/components/promo/Promo';
import Transactions from '@/components/transactions/Transactions';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <h2>Make A Deposit</h2>
        <PaymentMethod />
        <Promo />
        <Transactions />
      </div>
    </div>
  );
}

export default App;
