function staircase(n) {
  if(n > 0 && n <= 100 && typeof n === 'number' && n === parseInt(n, 0)) {
    for (let i = 1; i <= n; i++) { 
      let blanks = [ ...[], ...Array(n - i)].map(i => ' ');
      let hashes = [ ...[], ...Array(n - (n - i))].map(i => '#');
      console.log([...blanks, ...hashes].join(''));
    }
  }
}
staircase(6)