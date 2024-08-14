// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
  if (s.length % 2 === 1) {
    return false;
  }

  const stack = [];
  const closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (closeToOpen[char]) {
      const lastItem = stack[stack.length - 1];
      if (lastItem === closeToOpen[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("((([])))")); // true
console.log(isValid("[")); // false
console.log(isValid("[[")); // false
