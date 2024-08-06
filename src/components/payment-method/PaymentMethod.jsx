const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <h2>Choose Payment Method</h2>

      <section className="payment-method__section">
        <h3 className="payment-method__section__title">
          Cards, E-money, PIN
        </h3>

      </section>

      <section className="payment-method__section">
        <h3 className="payment-method__section__title">
          Cryptocurrency
        </h3>

      </section>
    </div>
  );
};

export default PaymentMethod;
