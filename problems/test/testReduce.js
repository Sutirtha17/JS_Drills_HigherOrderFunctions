import reduce from "../reduce.js";
import { items } from "./../../dataset/dataset.js";
export function cb(accumulator, value) {
  // return accumulator + value; // for testing purpose
  /* ADD YOUR CODE HERE */
}
const result = reduce(items, cb);
console.log(result);
