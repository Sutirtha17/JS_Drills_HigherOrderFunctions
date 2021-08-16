export default function map(elements, cb) {
  let array = [];
  for (let i = 0; i < elements.length; i++) array.push(cb(elements[i], i));
  return array;
}
