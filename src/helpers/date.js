const formatDate = (isoString) => {
  const date = new Date(isoString);

  const day = date.getDate()
    .toString()
    .padStart(2, '0');

  const month = (date.getMonth() + 1)
    .toString()
    .padStart(2, '0');

  const timePart = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).replace(' ', '');

  return `${day}.${month} at ${timePart}`;
};

export default formatDate;
