import Header from '@/components/header/Header';
import PaymentMethod from '@/components/payment-method/PaymentMethod';
import Promo from '@/components/promo/Promo';
import Transactions from '@/components/transactions/Transactions';

function App() {
  return (
    <div className="app">
      <Header />
      <PaymentMethod />
      <Promo />
      <Transactions />
    </div>
  );
}

export default App;
