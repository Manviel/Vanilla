export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const groupBy = (arr, prop) => {
  const map = new Map(Array.from(arr, (obj) => [obj[prop], []]));

  arr.forEach((obj) => map.get(obj[prop]).push(obj));

  return Array.from(map.values());
};

export const randomInRange = (min, max) => {
  const byteArray = new Uint8Array(1);

  window.crypto.getRandomValues(byteArray);

  const range = max - min + 1;

  return min + (byteArray[0] % range);
};
