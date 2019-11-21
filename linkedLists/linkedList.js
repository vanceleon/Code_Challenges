class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if(!this.head) {
      return undefined;
    }
    while (this.next != null) {
      if(this.next === this.tail){
        this.val = this.tail;
        this.next = null;
        this.length--;
      }
    }
  }
}


let list = new LinkedList();
list.push('Hello');
list.push('Goodbye');
console.log(list);