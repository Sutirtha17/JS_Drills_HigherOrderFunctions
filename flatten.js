export default function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) result = result.concat(flatten(array[i]));
    else result.push(array[i]);
  }
  return result;
}
