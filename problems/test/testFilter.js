import filter from "./../filter.js";
import { items } from "./../../dataset/dataset.js";
const cb = (value, index) => {
  // if (value >= 3) return value; // used for testing purpose
  /* ADD YOUR CODE HERE*/
};
const result = filter(items, cb);
console.log(result);
