import PropTypes from 'prop-types';

const PaymentMethodItem = (props) => {
  const { card, openPaymentPopup } = props;
  const { title, logo, comission, label } = card;

  return (
    <button className="payment-method-item" onClick={openPaymentPopup}>
      {label && (
        <div
          className={
            `payment-method-item__label payment-method-item__label--${label}`
          }
        >
          {label}
        </div>
      )}
      <img
        src={`/src/assets/payment-options-logo/${logo}.svg`}
        alt="Payment method logo"
      />
      <p className="payment-method-item__title">
        {title}
      </p>
      <p className="payment-method-item__comission">
        Comission {comission}%
      </p>
    </button>
  );
};

PaymentMethodItem.propTypes = {
  openPaymentPopup: PropTypes.func,
  card: PropTypes.shape({
    title: PropTypes.string,
    logo: PropTypes.string,
    comission: PropTypes.number,
    label: PropTypes.string,
  })
};

export default PaymentMethodItem;
