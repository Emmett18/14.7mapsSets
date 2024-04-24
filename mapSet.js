// Emmett Kjolseth
// 04/24/2024
// Map and Set Exercise

//1)
new Set([1, 1, 2, 2, 3, 4]); // Returns: {1,2,3,4}

//2)
[...new Set("referee")].join(""); // Returns: "ref"

//3)
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
/*
0: {Array(3) => true}
1: {Array930 => false}
*/

//4) hasDuplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//5) vowelCount
const isVowel = (char) => "aeiou".includes(char);
const vowelCount = (str) => {
  const vowelMap = new Map();
  for (let char of str) {
    let lCaseChar = char.toLowerCase();
    if (isVowel(lCaseChar)) {
      if (vowelMap.has(lCaseChar)) {
        vowelMap.set(lCaseChar, vowelMap.get(lCaseChar) + 1);
      } else {
        vowelMap.set(lCaseChar, 1);
      }
    }
  }
  return vowelMap;
};
