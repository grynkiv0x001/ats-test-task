import { useState } from 'react';

import Header from '@/components/header/Header';
import Sidebar from '@/components/sidebar/Sidebar';
import PaymentMethod from '@/components/payment-method/PaymentMethod';
import Promo from '@/components/promo/Promo';
import Transactions from '@/components/transactions/Transactions';

import './app.scss';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="app">
      <Header openSidebar={() => setShowSidebar(true)} />
      {showSidebar && (
        <Sidebar closeHandler={() => setShowSidebar(false)} />
      )}
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
