export const days = [
  "For You",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Recently Played"
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const groupBy = (arr, prop) => {
  const map = new Map(Array.from(arr, obj => [obj[prop], []]));

  arr.forEach(obj => map.get(obj[prop]).push(obj));

  return Array.from(map.values());
};
