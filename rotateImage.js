class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue() {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}


function rotateImage(arr) {
// need to figure out the length of the arrays 
// length of the interior arrays
// center of the both arrays will remain the same at all times
  const centerFirstIndex = Math.round(arr.length/2 - 1);
  const centerSecIndex = Math.round(arr[0].length/2 - 1);
  let swapHolder = arr[0][0];
  arr[0][0] = arr[0][arr.length - 1];
  arr[0][arr.length - 1] = arr[arr.length - 1][arr.length - 1];
  arr[arr.length - 1][arr.length - 1] = arr[arr.length - 1][0] ;
  arr[arr.length - 1][0] = swapHolder;

  // console.log(centerSecIndex)
  // console.log(arr[centerFirstIndex][centerSecIndex]);
  // let row ;
  // let column;
  // while (row && column) {
     for(let i = 1; i <arr.length - 1; i++) {
       for(let j = 1; i <arr[0].length - 1; i++ ) {
        console.log(arr[i][j])
       }
     }
  // }
}
// rotateImage([ [1, 2],
              // [3, 4]]);

rotateImage([
[1, 1, 5, 9, 9],
[2, 2, 6, 0, 0],
[3, 3, 7, 1, 1],
[4, 4, 8, 2, 2],
[5, 5, 9, 3, 3]
]);
            