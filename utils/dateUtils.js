export function getToday() {
  const today = new Date();
  return today;
}

export function getDayString(date = new Date()) {
  return String(date.getDate());
}

export function getYearString(date = new Date()) {
  return String(date.getFullYear());
}

// A helper that returns day and year as strings for assertions
export function getDayAndYear() {
  return { day: getDayString(), year: getYearString() };
}

// Returns abbreviated month name, e.g. "Aug"
export function getMonthShort(date = new Date(), locale = undefined) {
  return date.toLocaleString(locale, { month: 'short' });
}

// Returns abbreviated month name in lowercase, e.g. "aug"
export function getMonthShortLower(date = new Date(), locale = undefined) {
  return getMonthShort(date, locale).toLowerCase();
}
