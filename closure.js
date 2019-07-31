function createBase(num){
    const addNum = 6
    return function(num){
      console.log(num + addNum)
    }
  }
  
  const addSix = createBase();
  addSix(10); //16
  addSix(21); //27