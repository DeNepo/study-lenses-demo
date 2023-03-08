import { labeledLogger } from "../../../../lib/labeled-logger.js";

const { log, assert } = labeledLogger();

const arr = [];

const exercise5_cb_0 = () => {
  log("pushing 1");
  arr.push(1);
};
const intervalId = setInterval(exercise5_cb_0, 100);

// fill in the blanks

const exercise5_cb_1 = () => {
  const sum = arr.reduce((sum, next) => sum + next, 0);
  assert(sum === 0, `Test 1: expected ${sum} to be 0`);
};
setTimeout(exercise5_cb_1, _);

const exercise5_cb_2 = () => {
  assert(arr.length === 7, `Test 2: expected ${sum} to be 7`);
};
setTimeout(exercise5_cb_2, _);

const exercise5_cb_3 = () => {
  const sum = arr.reduce((sum, next) => sum + next, 0);
  assert(sum === 6, `Test 3: expected ${sum} to be 6`);

  clearTimeout(intervalId);
  arr.push("almost done!");
};
setTimeout(exercise5_cb_3, _);

const exercise5_cb_4 = () => {
  const sum = arr.reduce((sum, next) => sum + next, 0);
  assert(sum === 2, `Test 4: expected ${sum} to be 2`);
};
setTimeout(exercise5_cb_4, _);

const exercise5_cb_5 = () => {
  const sum = arr.reduce((sum, next) => sum + next, 0);
  assert(sum === 5, `Test 5: expected ${sum} to be 5`);
};
setTimeout(exercise5_cb_5, _);

log("= = = =  the call stack is empty  = = = =");
