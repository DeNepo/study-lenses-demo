"use strict";

const element = document.createElement("buton");
element.innerHtml = "go home";
element.class = "large-btn";

// the assertions are correct!  change the code above to pass them
console.assert(element.nodeName === "BUTTON", "Test 1: nodeName");
console.assert(element.innerText === "go home", "Test 2: innerText");
console.assert(element.className === "large-btn", "Test 3: className");
