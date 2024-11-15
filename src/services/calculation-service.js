const multiplyBy = (value, factor) => {
  if (!value) return;
  const parsedValue = parseFloat(value);

  if (Number.isNaN(parsedValue)) return;
  return value * factor;
};

module.exports = { multiplyBy };
