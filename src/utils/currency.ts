// Conversion rates relative to INR (approximate baseline)
const RATES_TO_INR: Record<string, number> = {
  INR: 1,
  USD: 0.012,
  EUR: 0.011,
  GBP: 0.0095
};

const SYMBOLS: Record<string, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  GBP: '£'
};

export function formatCurrency(amountInInr: number, currency: string = 'INR'): string {
  const rate = RATES_TO_INR[currency] || 1;
  const symbol = SYMBOLS[currency] || '₹';
  
  if (currency === 'INR') {
    return `${symbol}${amountInInr.toLocaleString('en-IN')}`;
  }

  const converted = amountInInr * rate;
  return `${symbol}${Math.round(converted).toLocaleString('en-US')}`;
}
