import { labeledLogger } from "../../../../lib/labeled-logger.js";

const { log, assert } = labeledLogger();

// fill in the blanks

let x = "";

const exercise3_cb_1 = () => {
  x += "a";
  log("cb 1:", x);
};
const intervalId = setInterval(exercise3_cb_1, _);

const exercise3_cb_2 = () => {
  x += "w";
  log("cb 2:", x);
};
setTimeout(exercise3_cb_2, _);

const exercise3_cb_3 = () => {
  assert(x === "whaaaa!", `expected "${x}" to be "whaaaa!"`);
};
setTimeout(exercise3_cb_3, _);

const exercise3_cb_4 = () => {
  _; // clear something
  x += "!";
  log("cb 4:", x);
};
setTimeout(exercise3_cb_4, _);

const exercise3_cb_5 = () => {
  x += "h";
  log("cb 5:", x);
};
setTimeout(exercise3_cb_5, _);

log(x);

log("= = = =  the call stack is empty  = = = =");
