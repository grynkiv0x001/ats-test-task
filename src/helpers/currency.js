const formatCurrency = (amount, currency) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency,
  });
};

export default formatCurrency;
