import map from "../map.js";
import { items } from "../../dataset/dataset.js";
const cb = (value, index) => {
  // return value * 2;
  /* ADD YOUR CODE HERE */
};
let result = map(items, cb);
console.log(result);
