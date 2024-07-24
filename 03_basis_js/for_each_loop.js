const coding = ['js', 'python', 'php', 'java', 'c++'];

// coding.forEach( function(val) {
// console.log(val);
// });

// coding.forEach( (item) => {
//     console.log(item);
// });

// function getdata(item){
//     console.log(item);
// }
// coding.forEach(getdata); //give only reference of the function

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
}); 