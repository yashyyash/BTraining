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

console.log(dateFormatter(new Date(), "ja-JP"));

function currencyFormatter(locale, symbol, amount) {
  return new Intl.NumberFormat(locale, {
    currency: symbol,
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(amount);
}

function currencyFormatter(locale, currency, amount) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}

console.log(currencyFormatter('ja-JP', 'JPY', 12000));          // 🇯🇵 Japanese Yen
console.log(currencyFormatter('mr-IN', 'INR', 12000));          // 🇮🇳 Marathi (India)
console.log(currencyFormatter('hi-IN', 'INR', 12000));          // 🇮🇳 Hindi (India)
console.log(currencyFormatter('ko-KR', 'KRW', 12000));          // 🇰🇷 Korean Won
console.log(currencyFormatter('en-US', 'USD', 12000));          // 🇺🇸 U.S. Dollars
console.log(currencyFormatter('en-GB', 'GBP', 12000));          // 🇬🇧 British Pounds
