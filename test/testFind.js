import find from "../find.js";
import { items } from "../dataset/dataset.js";
const cb = (value, index) => {
  // if (value > -1) return value; // used for testing purpose
  /* ADD YOUR CODE HERE*/
};
const result = find(items, cb);
console.log(result);
