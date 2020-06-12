const str = 'Vance$ Leon$';

const unquieString = str => {
  // all characters if the length is more than impossible to be unquie
  if (str.length === 128) return false;
  const arr = str.toLowerCase().split('');
  const unquieArr = [];
  console.log(arr)
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (i === 0) {
      unquieArr[i] = arr[i];
    } else if (unquieArr[0] === arr[i]) {
      return false;
    }
  }
  return true;   
}
unquieString(str);