import Dom from './Dom.js';

export const clearInput = (...input: any): void => {
  input.forEach((element: any) => (element.value = ''));
  input.forEach((element: any) => element.blur());
};

export const formatMovementDate = (date: any, locale: string) => {
  const calcDaysPassed = (date1: any, date2: any) =>
    // Prevent opposite date that results to - = Add Math.abs();
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const dayPassed = calcDaysPassed(new Date(), date);

  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesteday';
  if (dayPassed <= 7) return `${dayPassed} days`;

  return new Intl.DateTimeFormat(locale).format(date);
};

export const formatCurrency = (value: any, locale: any, currency: any) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

export const displayMessage = (
  message: string,
  messageType: string,
  seconds: number
): void => {
  if (messageType === 'info')
    Dom.message.classList.add(`message--${messageType}`);

  if (messageType === 'error')
    Dom.message.classList.add(`message--${messageType}`);

  Dom.message.style.display = 'block';
  Dom.message.textContent = message;

  setTimeout(() => {
    Dom.message.style.display = 'none';

    // Clear classnames
    Dom.message.className = '';
    Dom.message.classList.add('message');
  }, seconds * 1000);
};
