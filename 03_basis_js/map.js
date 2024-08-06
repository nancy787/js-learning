const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach( (num) => {
//     num = num+10;
//     console.log(num);
// });

// let num = numbers.map( (num) => {
//    return  num = num+10;
// });

// console.log(num);

//chaining

let data = numbers.map( (num) => num * 10)
                  .map( (num) => num+2)
                  .filter( (num) => num >=30)
console.log(data); //this is called chaining