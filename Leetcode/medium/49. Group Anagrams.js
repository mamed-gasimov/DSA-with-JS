// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

const groupAnagrams = (strs) => {
  const obj = {};

  for (const str of strs) {
    const key = str.split("").sort().join();
    if (obj[key]) {
      obj[key].push(str);
    } else {
      obj[key] = [str];
    }
  }

  return Object.values(obj);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
