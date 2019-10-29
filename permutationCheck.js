// Check Permutation
// Given two strings write a method to decide if one is a permutation of the other 

const str1 = 'Vance';
const str2 = 'dnceV';
const obj1 = {};

// solution given is O(n) run time
const permutationCheck = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] += 1;
    console.log(obj1)
  }
  for (let i = 0; i < str2.length; i++) {
    if(!obj1[str2[i]]) {
      return false
    }
  }
  return true
}
console.log(permutationCheck(str1, str2));



