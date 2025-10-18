function dateFormatter(value, locale) {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h12",
  }).format(new Date(value));
}

console.log(dateFormatter(new Date(), "en-US"));

function currencyFormatter(locale, symbol, amount) {
  return new Intl.NumberFormat(locale, {
    currency: symbol,
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
}

console.log(currencyFormatter('en-US','USD',12000));