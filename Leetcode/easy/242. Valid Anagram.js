const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const objS = {};
  const objT = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    objS[charS] = objS[charS] ? objS[charS] + 1 : 1;
    objT[charT] = objT[charT] ? objT[charT] + 1 : 1;
  }

  for (const prop in objS) {
    if (objS[prop] !== objT[prop]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("car", "rat")); // false
console.log(isAnagram("book", "car")); // false
console.log(isAnagram("cake", "aeck")); // true
