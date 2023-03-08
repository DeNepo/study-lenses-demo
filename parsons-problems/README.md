## Parsons Problems: _Behavior, Strategy, Implementation_

Study many different ways to approach the same problem by reconstructing different solutions. (most of) The exercises in this folder are organized like so:

- **one folder per behavior**: The top-level folders all contain solutions to the same coding challenge
  - **one folder per strategy**: Folders inside each coding challenge have a different strategy
    - **one .js file per implementation**: Each parsons problem has a different implementation for the same strategy

Keep an eye out for side-effects! Many of the solutions from CodeWars will modify the arrays that are passed as arguments, can you spot which ones?

_Hint: start with [./repeat-string](./repeat-string), it's adapted from the examples in this module's README. All the others are adapted from CodeWars_

> Psst. There's a lot of these, you don't need to do them all! Just as much as you find helpful

- [Behavior](#behavior)
- [Strategy](#strategy)
- [Implementation](#implementation)

---

## Behavior

What does the function do? What are it’s arguments and it’s return value? How could you use it in a program? Behavior is all about what your function looks like "from the outside", without caring about what is written inside.

Functions behavior is generally described using **documentation**, **unit tests** and **use cases**:

### Documentation (JSDoc comment)

```js
/**
 * repeats a string a specific number of times
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  repetitions cannot be negative, and must be an integer
 * @return {string} the text repeated as many times as repetitions
 */
```

### Unit Tests (pass/fail assertions)

```js
describe("repeats a string any number of times:", () => {
  describe("an empty string", () => {
    it('should repeat "" 0 times', () => {
      expect(repeatString("", 0)).toEqual("");
    });
    it('should repeat "" 10 times', () => {
      expect(repeatString("", 10)).toEqual("");
    });
    it('should repeat "" 100 times', () => {
      expect(repeatString("", 100)).toEqual("");
    });
  });
  describe("zero repetitions", () => {
    it('a non-empty string repeated 0 times -> ""', () => {
      expect(repeatString("asdf", 0)).toEqual("");
    });
    it('a longer string repeated 0 times -> ""', () => {
      expect(repeatString("tommywalk", 0)).toEqual("");
    });
  });
  describe("standard use cases", () => {
    it("should repeat a phrase 3 times", () => {
      expect(repeatString("go to school", 3)).toEqual(
        "go to schoolgo to schoolgo to school"
      );
    });
    it("should repeat phrases with punctuation", () => {
      expect(repeatString('"Go!", said Dr. Seuss?', 2)).toEqual(
        '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
      );
    });
    it("should repeat strings with special characters", () => {
      expect(repeatString("\\ \n \t s", 2)).toEqual("\\ \n \t s\\ \n \t s");
    });
  });
  describe("default values", () => {
    it("should repeat 1 time by default (second parameter)", () => {
      expect(repeatString("asdf")).toEqual("asdf");
    });
    it('should repeat "" by default (first parameter)', () => {
      expect(repeatString()).toEqual("");
    });
  });
});
```

### Use Cases ("real-world" examples)

```js
// repeating a string inside an I/O loop
let repeatedText = "";
while (true) {
  const userString = promptForSomething("input a string to repeat");
  const userRepetitions = promptForNumber("how many times to repeat it?");
  const repeatedInput = repeatString(userString, userRepetitions);
  const userConfirmed = confirm(`is this correct: "${repeatedInput}"`);
  if (userConfirmed) {
    repeatedText = repeatedInput;
    break;
  }
}
console.log(repeatedText);
```

```js
// repeating a string from the DOM
const userString = document.getElementById("text-input").value;
const userRepetitions = document.getElementById("number-input").value;
const repeatedInput = repeatString(userString, userRepetitions);
document.getElementById("repeated-value-display").innerHTML = repeatedInput;
```

## Strategy

How do you approach solving the problem? There are many strategies to solve the same problem! A way to practice strategy is to think of transforming the arguments to the return value in small steps, _focusing on the data not the code_. This is the realm of flow charts, diagrams, and pseudo-code.

One way to approach strategy is to solve the problem a few different ways by hand, writing what you expect to change in memory at each step. Like if you were the debugger and you couldn't see the source code. Using a pencil and paper is a the best way to go, pick a few test cases and see how you'd solve them manually.

Here are four possible strategies to approach repeating a string. Each one is written as block comment with step-by-step goals focusing on _what_ should happen at each step, not _how_ it will happen. This type of comment is helpful to include in your code:

### Iterate until string is long enough

```js
/* iterating until the new string's length is correct

  repeatString(text, repetitions) =>
    1. calculate the final length for the new string
    2. create a new string to fill with many text's
    3. iterate as long as the new string is too short
      a. check if the new string is long enough
        stop if it is, keep going if it is not
      b. append text to the new
      c. repeat
    return: the new repeated string

*/
```

### Iteration with a stepper variable

```js
/* iterating over the number of repetitions

  repeatString(text, repetitions) =>
    1. create a new string to fill with many text's
    2. create a stepper variable, starting at 0
    3. iterate from 0 to repetitions
      a. check if stepper is still less than repetitions
        keep going if it is, otherwise stop iterating
      b. append text to the new string
      c. increment the stepper
      d. repeat
    return: the new repeated string

*/
```

### Recurse with base-case 0

```js
/* recursion with base-case 0

  i'm using 0 as the base-case because that is the fewest possible repetitions
  zero repetitions is an empty string, so if repetitions is 0 it will return ''

  otherwise i'll need to combine the text with a string that has one fewer reptitions

  repeatString(text, repetitions) =>
    base-case: repetitions is 0
      return: an empty string
    recursive case: repetitions is greater than 0
      nextRepetitions = subtract one from repetitions
      recursedValue = recursively call repeatString with text and nextRepetitions
      return: text + recursedValue

*/
```

### Native JS methods

```js
/* use built-in .js methods

  repeatString(text, repetitions) =>
    1. make sure the data is the correct type and format for the method you're using
    2. use the method
    return: the result

*/
```

## Implementation

Which language features and which lines of code can you use to make your strategy a reality? There are many ways to code the same strategy. let's look at multiple implementations for each strategy described above, all of these functions will pass the unit tests written in the _Behavior_ section:

### Iterate Until String is Long Enough

#### While loop, true and break

```js
/* unconventional and pretty old-school
  there is a lot of reinventing the wheel
  while loops are designed to check conditions
  this is not the simplest solution to read or maintin
*/
const repeatString = (text = "", repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = "";
  while (true) {
    if (repeatedText.length === finalLength) {
      break;
    }
    repeatedText = repeatedText + text;
  }
  return repeatedText;
};
```

#### While loop, logic in head

```js
/* the cleanest implementation for this strategy
  it uses the language feature designed for this type of strategy
*/
const repeatString = (text = "", repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = "";
  while (repeatedText.length < finalLength) {
    repeatedText += text;
  }
  return repeatedText;
};
```

#### For loop with only a condition check

```js
/* not the best implementation, it's confusing to read
  this strategy does not use stepping, and for loops are designed for stepping
  implementing this strategy with a for loop is putting a square peg in a round hole

  when someone sees a for loop they expect it to be used like a for loop
  this implementation uses a for loop like a while loop
  the computer doesn't care, but the intention is confusing for other devs
*/
const repeatString = (text = "", repetitions = 1) => {
  const finalLength = text.length * repetitions;
  let repeatedText = "";
  for (; repeatedText.length < finalLength; ) {
    repeatedText += text;
  }
  return repeatedText;
};
```

### Iteration with Stepper Variable

#### While loop, true and break

```js
/* unconventional and pretty old-school
  there is a lot of reinventing the wheel
  while loops are designed to check conditions
  this is not the simplest solution to read or maintain
*/
const repeatString = (text = "", repetitions = 1) => {
  let repeatedText = "";
  let count = 0;
  while (true) {
    if (count === repetitions) {
      break;
    }
    repeatedText += text;
    count++;
  }
  return repeatedText;
};
```

#### While loop, condition in head

```js
/* a better way to user the while loop since the condition is known
  easier to read and more conventional than the previous implementation
  maybe you find this easier to read than a for loop
*/
const repeatString = (text = "", repetitions = 1) => {
  let repeatedText = "";
  let count = 0;
  while (count < repetitions) {
    repeatedText = repeatedText + text;
    count++;
  }
  return repeatedText;
};
```

#### For loop

```js
/* the cleanest implementation for this strategy
  it uses the language feature designed for stepping
*/
const repeatString = (text = "", repetitions = 1) => {
  let repeatedText = "";
  for (let count = 0; count < repetitions; count++) {
    repeatedText += text;
  }
  return repeatedText;
};
```

### Recursion with Base-Case 0

#### Ternary Operator

```js
// in all it's ES6 one-line glory
// some people find this easier to read than conditionals
const repeatString = (text = "", repetitions = 1) =>
  repetitions === 0 ? "" : text + repeatString(text, nextRepetitions - 1);
```

#### Conditional Statement

```js
// good old fashioned conditional blocks
// some people find this easier to read than ternaries
const repeatString = (text = "", repetitions = 1) => {
  if (repetitions === 0) {
    return "";
  } else {
    const nextRepetitions = repetitions - 1;
    const oneRepetitionShort = repeatString(text, nextRepetitions);
    return text + oneRepetitionShort;
  }
};
```

#### Conditional Statement (tail-call recursion)

```js
/* this implementation is "backwards compatible"
  that means that it has a different signature (the extra `repeated` parameter)
  but can still replace previous implementations without breaking anything
*/
const repeatString = (text = "", repetitions = 1, repeated = "") => {
  if (repetitions === 0) {
    return repeated;
  } else {
    const nextRepeated = repeated + text;
    const nextRepetitions = repetitions - 1;
    return repeatString(text, nextRepetitions, nextRepeated);
  }
};
```

### Built-In JS Methods

#### Sting.prototype.repeat

```js
// short and sweet, no room for mistakes
const repeatString = (text = "", repetitions = 1) => text.repeat(repetitions);
```

#### Array.prototype.fill

```js
// less clear and more complex, but still pretty clear to read
const repeatString = (text = "", repetitions = 1) => {
  const oneEntryPerRepetition = Array(repetitions).fill(text);
  const repeatedString = oneEntryPerRepetition.join("");
  return repeatedString;
};
```
