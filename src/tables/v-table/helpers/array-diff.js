export default function (arr1, arr2) {
  const arr = arr1.filter((i) => arr2.indexOf(i) < 0);
  return arr;
}
