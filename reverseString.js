
const string = "Lambda School"

// function reverseString(str) {
//   const dorw = str.split("");
//   const word = dorw.reverse();
//   const joinWord = word.join("");
  
//   return joinWord;

// }
// reverseString(string);


const reverseString = (str) => {
  let reverseWord = [];
  splitStr = str.split("");
  let splitString
  // splitStr.forEach((letter) => {
    
  // })
  
  for(let i = splitStr.length - 1; i >= 0; i--){
    reverseWord.push(splitStr[i]);
  }
  splitString = reverseWord.join("");
  return splitString;
  
}
console.log(reverseString("VanceLeon"))