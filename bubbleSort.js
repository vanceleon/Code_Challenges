// function taking in array 
// looping through and keep track of two elements as it loops 
// compare elements and determine which are greater 
// swap index of each element 
// move one index to the right
// repeat
// at length of the array set the largest element 
// keep track of endIndex

function bubbleSort (arr, endIndex) {
    if (endIndex === 0) return arr;
    for (let i = 0; i < endIndex; i++){
      if(arr[i] > arr[i + 1]){
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    return bubbleSort(arr, --endIndex);
  }
  console.log(bubbleSort([1,4,3,25,40,2,9,2], 7));
  

function bubbleSort (arr, endIndex) {
  while(endIndex >= 0) {
    for (let i = 0; i < endIndex; i++){
      if(arr[i] > arr[i + 1]){
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    endIndex--;
  }
  return arr
}
console.log(bubbleSort([1,4,3,25,40,2,9,2], 7));