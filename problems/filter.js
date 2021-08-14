export default function filter(elements, cb) {
  let result = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i], i)) result.push(cb(elements[i], i));
  }
  return result;
}
