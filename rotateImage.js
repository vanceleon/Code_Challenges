<<<<<<< HEAD
function rotateImage(arr) {
    // need to figure out the length of the arrays 
    // length of the interior arrays
    // center of the both arrays will remain the same at all times
      let center = arr[Math.round(arr.length/2 - 1)][Math.round(arr[0].length/2 - 1)];
      for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
          if (j < arr[i].length && i < arr.length){
            // placeHolder = arr[i][j];
            // console.log(placeHolder)
            // if(j + 1 > arr[i].length && i + 1 > arr.length) return;
            let placeHolder = 0;
            placeHolder = arr[i][j];
            console.log(i, j)
            arr[i][j] = arr[i][j];
            // arr[i][j + 1] = arr[i + 1][j + 1];
            // arr[i + 1][j + 1] = arr[i + 1][j];
            // arr[i + 1][j] = placeHolder;
            
          }
          
        }
      }
      
      
      console.log(arr)
    
    // for (let i = 0; i < arr.length; i++ ) {
    //   // let subArray = arr[i];
    //   // console.log(arr[i])
    //   // for (let j = 0; j < subArray.length; j++) {
    //   // }
    // }
    }
    // rotateImage([ [1, 2],
    //               [3, 4]]);
    
    rotateImage([
    [1, 1, 5, 9, 9],
    [2, 2, 6, 0, 0],
    [3, 3, 7, 1, 1],
    [4, 4, 8, 2, 2],
    [5, 5, 9, 3, 3]
    ]);
=======
function rotateImage(arr) {
    // need to figure out the length of the arrays 
    // length of the interior arrays
    // center of the both arrays will remain the same at all times
      let center = arr[Math.round(arr.length/2 - 1)][Math.round(arr[0].length/2 - 1)];
      for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
          if (j < arr[i].length && i < arr.length){
            // placeHolder = arr[i][j];
            // console.log(placeHolder)
            // if(j + 1 > arr[i].length && i + 1 > arr.length) return;
            let placeHolder = 0;
            placeHolder = arr[i][j];
            console.log(i, j)
            arr[i][j] = arr[i][j];
            // arr[i][j + 1] = arr[i + 1][j + 1];
            // arr[i + 1][j + 1] = arr[i + 1][j];
            // arr[i + 1][j] = placeHolder;
            
          }
          
        }
      }
      
      
      console.log(arr)
    
    // for (let i = 0; i < arr.length; i++ ) {
    //   // let subArray = arr[i];
    //   // console.log(arr[i])
    //   // for (let j = 0; j < subArray.length; j++) {
    //   // }
    // }
  }
  // rotateImage([ [1, 2],
  //               [3, 4]]);
  
  rotateImage([
    [1, 1, 5, 9, 9],
    [2, 2, 6, 0, 0],
    [3, 3, 7, 1, 1],
    [4, 4, 8, 2, 2],
    [5, 5, 9, 3, 3]
    ]);
>>>>>>> 703c24ecded005a94e47e2531f9f37e2392622bf
                