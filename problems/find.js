export default function find(elements, cb) {
  let result;
  for (let i = 0; i < elements.length; i++) {
    result = cb(elements[i], i);
    if (result) break;
  }
  return result;
}
