// average age for 100 hundred users
// users age array
const exampleUsers = [
    { username: 'test', age: 20 },
    { username: 'test', age: 20 },
    { username: 'test', age: 20 },
    { username: 'test', age: 20 },
    { username: 'test', age: 20 },
    { username: 'test', age: 20 },
    { username: 'test', age: 20 },
    { username: 'test', age: 20 },
   ];
  
  
  
  
  const calcAverageAge = (users) => {
  
    exampleUsers = {};
    let sum = 0;
    // let average = 0;
    // loop and add to the sum variable
    for (let i = 0; i < users.length; i++) {
      // console.log(users[i].age)
      sum += users[i].age;
    }
    // console.log(sum);
    const average = sum / users.length;
    return average;
  };
  
  console.log(calcAverageAge(exampleUsers));
  