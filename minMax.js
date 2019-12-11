function miniMaxSum(arr) {
    arr.sort(function(a,b){return a - b})
    // console.log(arr);
    const minArr = [];
    const maxArr = [];
    for (let i = 0; i < arr.length; i++ ) {
      if (minArr.length < 4) {
        minArr.push(arr[i]);
      }
    }
    for (let i = arr.length - 1; i > 0; i-- ) {
      if (maxArr.length < 4) {
        maxArr.push(arr[i]);
      }
    }
    let min = 0;
    let max = 0;
    for (let i = 0; i< minArr.length; i++) {
      min += minArr[i]
    }  
    for (let i = 0; i< maxArr.length; i++) {
      max += maxArr[i]
      // console.log(max)
    }  
    // console.log(minArr)
    // console.log(maxArr)
    console.log(min, max)
  }
  miniMaxSum([1, 2, 300, 4, 5]);