export const days = [
  "For You",
  "Recently Played",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

export const groupBy = (arr, prop) => {
  const map = new Map(Array.from(arr, obj => [obj[prop], []]));

  arr.forEach(obj => map.get(obj[prop]).push(obj));

  return Array.from(map.values());
};
