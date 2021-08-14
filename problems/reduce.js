export default function reduce(elements, cb, startingValue) {
  if (elements.length == 0 && startingValue == undefined)
    return "Error: Reduce of empty array with no initial value"; // taking care of the edge case
  if (startingValue == undefined) startingValue = 0; // initializing with 0 if starting value is not passed
  let result = startingValue;
  for (let i = 0; i < elements.length; i++) {
    result = cb(result, elements[i]);
  }
  return result;
}
