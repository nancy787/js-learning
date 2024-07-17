let namesArray =  ["nancy", "princy", "nisha"];
let othernamesArray = ["kerul", "para"];

// const NewArray = namesArray.push(othernamesArray); //push this array into new elements
// const concatArray = namesArray.concat(othernamesArray); //it  will return a new array by arays without modyifying an existing arays
// console.log(concatArray);//limitation with concat operters is you can only pass one params

// const  spreadArray = [...namesArray, ...othernamesArray]; //you can add multiple arrays in it 
// console.log(typeof(spreadArray));/

// let data = [1,3,4, [23,87], 0, 31,34,["nancy", ["nancy_bhat", true, ["ter"] ]]];
// console.log(data.length); //it wil return an array into subarray by depth here is two depth
// console.log(data.flat(1));
// console.log(data.flat(Infinity));

// console.log(Array.isArray(namesArray)); //it will return bollean check arrays
// console.log(Array.from("nancy")); //create an array from object takes string in param
// console.log(Array.from({names : "nancy"})); //return empty aray
// console.log(Array.at()) 

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3)); //return a new array form set of an element


// namesArray.forEach((name, index) => {
//     console.log(`${name.toUpperCase()}`);
// });
// console.log(namesArray.copyWithin(othernamesArray)); //it will copy firtt arrrya elemetg into the otherss
// console.log(othernamesArray);
// console.log(namesArray.sort()); //dertiemine the order of the elements
console.log(namesArray.fill(1));
console.log(namesArray);
console.log(othernamesArray);