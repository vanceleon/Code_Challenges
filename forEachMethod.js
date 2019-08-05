Array.prototype.forEach = function(cb) {
  // let arr = [];
  for(let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

['a', 'b', 'c'].forEach((letter) => {
  console.log(letter);
});

['a', 'b', 'c'].forEach((letter) => {
  console.log(letter + '!');
});

[1, 2, 3].forEach((num) => console.log(num));