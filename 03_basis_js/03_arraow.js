//arrow function

//Explisit return 

// const AddTwo = () => {
//     console.log('hello')
// }

//with params

// const AddTwo =(num1, num2) => {
//     return num1 + num2;
// }
// console.log(AddTwo(1,3));

//Implicit Return
// const AddTwo = (num1, num2) => (num1 + num2);


// const getUser = () => (username : "nancy"); //you cannot access objt data witout parenthesis
// const getUser = () => ({username : "nancy"});
// console.log(getUser());
// console.log(AddTwo(1,3));

//this keword

// const user = {
//     name : "nancy",
//     email : "nancy@mail.com",
//     welcome : function() {
//         console.log(`${this.name} hello `); //if ou are refereing current context in the scope you need to refer this (this is used to rfer current context)
//         console.log(this);
//     }
// }

// user.welcome();
// user.name = "naina";
// user.welcome(); //it is referenig current context

// console.log(this);

// function getthis() {
//     console.log(this);
// }

// getthis() //it is refer all the context for the node object