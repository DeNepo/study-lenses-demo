// fulfilled promise
new Promise(function executor1(resolve) {
  console.log("resolve executor");
  resolve("success!");
})
  .then((val) => console.log("resolved: " + val))
  .catch((val) => console.log("rejected: " + val));

// rejected promise
new Promise(function executor2(resolve, reject) {
  console.log("reject executor");
  reject("no success :(");
})
  .then((val) => console.log("resolved: " + val))
  .catch((val) => console.log("rejected: " + val));

// error in promise
new Promise(function executor3() {
  null();
})
  .then((val) => console.log("resolved: " + val))
  .catch((val) => console.log("rejected: " + val));

console.log("= =  the call stack is empty  = =");
