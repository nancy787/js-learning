let Name = "Nancy";
let Age = "60";

console.log(Name + Age)  ; // old method to concationa

console.log(`my name is ${Name} and my age is ${Age}`); //string interpolation

//other way to assgin value useing constructor

const GameName = new String('Hello-World-das'); 
const data = "Test";

// console.log(GameName.__proto__);
// console.log(GameName.charAt(2));
// console.log(GameName.indexOf('W'));
// console.log(GameName.toUpperCase());
// console.log(GameName.lastIndexOf('Hello'));

// const substring = GameName.substring(0,3); //if you add -ve number it will ignore and starts form 0th index
// console.log(substring);

// const slice = GameName.slice(-10,6); //it will count number to opposite if negetive values are given
// console.log(slice);

// const splitData = GameName.split(['-']);
// console.log(splitData);