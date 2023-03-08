// 1: declare variable flipper and declare the function assigned to it
const flipper = (param1, param2) => {
  // 3, 9: a return value is generated
  return param2 + param1;
  // 4, 10: parent result variable is declared & assigned
};

// 2: flipper is executed, creating a new frame
//    parameters are assigned values using 'a' & 'b'
const result1 = flipper("a", "b");
// 5: the value of result1 is tested
console.assert(result1 === "ba", "Test 1");

// 6, 7: variable is declared & assigned
const arg1 = "x";
const arg2 = "y";

// 8: flipper is executed, creating a new frame
//    parameters are assigned values from arg1 & arg2
const result2 = flipper(arg1, arg2);

// 11: the value of result2 is tested
console.assert(result2 === "yx", "Test 2");
