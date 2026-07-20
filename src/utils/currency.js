export const formatter = (value) =>
  value.toLocaleString(navigator.language, {
    style: 'currency',
    currency: 'EUR',
  });
