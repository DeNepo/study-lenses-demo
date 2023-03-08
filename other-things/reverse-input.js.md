# Reverse Input

This is a small program that reverses a user's input. The program has main
goals:

```mmd
graph LR
    A[1. gather user input] --> B(2. do core logic)
    B --> C[3. alert final result]
```

---

## Gather User Input

Use `prompt` to gather user input, the `while` loop will not exit until the user
types some text and hits "enter". There are two comparisons in the while loop's
condition, if either one of those are true the loop will repeat:

1. check if the input is `null`
2. check if the input is an empty string

```js
let input = null;

while (input === null || input === "") {
  input = prompt("enter some text, it will be reversed");
  console.log(input);
}
```

<details>
<summary>is the variable <code>input</code> scoped inside the <code>while</code> loop?</summary>

**No, it is not**: the `input` variable is _declared_ outside of the while
loop's curly braces, so it is not block scoped.

</details>
<details>
<summary>what is the <code>===</code> operator called, and what does it do?</summary>

**Strict Comparison**: It checks that the type _and_ value are the same.

</details>

References: [Programiz.com](https://www.programiz.com/javascript/while-loop),
[The Net Ninja](https://www.youtube.com/watch?v=PpbFyLTtpWI)

---

## Reverse the Input

Now that the program has the user's data in memory, it will reverse the input.
This will be done using two variables:

1. _reading_ from the variable that stores the user's input
2. _assigning_ to the variable that stores the reversed input

```js
let reversed = "";

for (const character of input) {
  reversed = character + reversed;
  console.log(reversed);
}
```

<details>
<summary>what happens if the body of the loop was replaced with <code>reversed = reversed + character;</code>?</summary>

**The input would not be reversed**: The program would read each character from
the input moving from the left to the right. As it goes through the input, each
character will be concatenated to the _end_ of the output:

- "abc" -> "a"
- "abc" -> "ab"
- "abc" -> "abc"

</details>

References:
[JavaScript.info](https://javascript.info/string#accessing-characters),
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of),
[Web Dev Junkie](https://www.youtube.com/watch?v=PcOODg7GInk)

---

## Alert the final value

Create a helpful message for the user so they know what happened to their data
in the program:

```js
const message = input + " --> " + reversed;

alert(message);

console.log(message);
```
