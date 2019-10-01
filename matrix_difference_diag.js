const arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ]
  
  function diagonalDifference(arr) {
    // Write your code here
    // Find first diagonial ref
    let firstDifference = 0;
    let secDifference = 0;
    for (let i = 0; i < arr.length; i++) {
      let firstPosition = i;
      firstDifference += arr[i][firstPosition]
    }
    let j = arr.length - 1;
    let firstPosition = 0;
    while (j >= 0 && firstPosition <= arr.length) {
      secDifference += arr[firstPosition][j];
      j--;
      firstPosition++;
    }
    const total = firstDifference - secDifference;
    return Math.abs(total);
  }
  
  console.log(diagonalDifference(arr));
  