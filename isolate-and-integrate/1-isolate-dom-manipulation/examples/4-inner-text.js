"use strict";

/* element.innerText

  .innerText will let you read and write what is inside an element

*/

const divEl = document.createElement("Div");
divEl.innerText = "div time!";
console.log(divEl.nodeName, divEl);
console.log(".innerText:", divEl.innerText, "\n\n");

const pEl = document.createElement("P");
pEl.innerText = "i'm a p";
console.log(pEl.nodeName, pEl);
console.log(".innerText:", pEl.innerText, "\n\n");

const buttonEl = document.createElement("bUTTOn");
buttonEl.innerText = "big time sun";
console.log(buttonEl.nodeName, buttonEl);
console.log(".innerText:", buttonEl.innerText, "\n\n");

const liEl = document.createElement("LI");
liEl.innerText = "third thing";
console.log(liEl.nodeName, liEl);
console.log(".innerText:", liEl.innerText, "\n\n");

const sectionEl = document.createElement("SeCtIoN");
sectionEl.innerText = ":)";
console.log(sectionEl.nodeName, sectionEl);
console.log(".innerText:", sectionEl.innerText, "\n\n");
