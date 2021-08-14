import each from "../each.js";
import { items } from "../../dataset/dataset.js";
const cb = (value, index) => {
  console.log(value);
};
each(items, cb);
