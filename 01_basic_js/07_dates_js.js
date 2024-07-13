const myDates = new Date();

// console.log(myDates) //its type is object
// console.log(myDates.getFullYear())
// console.log(myDates.getMonth())
// console.log(myDates.getDate())
// console.log(myDates.toDateString());
// console.log(myDates.toISOString());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toString());

let myCreatedDate = new Date('11-2-2024'); //moths start fom 0 n js when tou wrtiet single digit
console.log(myCreatedDate.toLocaleDateString());