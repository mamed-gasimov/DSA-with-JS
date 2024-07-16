// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

const containsDuplicate = (nums) => {
  const obj = {};

  for (const num of nums) {
    if (obj[num]) {
      return true;
    }

    obj[num] = 1;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
