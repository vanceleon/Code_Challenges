const arr = [-4, 3, -9, 0, 4, 1]

function fractionConvert(obj, n) {
  for (const key in obj) {
    let num;
    num = obj[key] / n;
    obj[key] = num.toPrecision(6);
    console.log(obj[key])
  }
}


function plusMinus(arr) {
  const n = arr.length;
  const results = {
    pos: 0,
    neg: 0,
    zer: 0
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      results.pos++;
    }
    if (arr[i] < 0) {
      results.neg++;
    }
    if (arr[i] === 0) {
      results.zer++;
    }
  }
return fractionConvert(results, n);

}
console.log(plusMinus(arr));