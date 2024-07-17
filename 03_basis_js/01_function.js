//1 function withodu params
function LogData() {
    console.log('hello nancy');
}

// /LogData //reference of function
// LogData() //exectution of function //fucntion withoud any arguements

//2 function with params
function sumData(num1, num2) {
    return num1+num2;
}

// console.log(sumData())//function without arfuements will give you NAN 
// console.log(sumData(2, 3))//function with arfuements will
// console.log(sumData(3))//function with arfuements wif you pass only one argument will give you NAN


// 3 function with params  and with defeult values
function sumData(num1 = 1 , num2 = 4) {
    return num1+num2;
}
// console.log(sumData()) //if you do not pass any value in arguement it will take defeut value

//4.funcion with stribg and defelut inparas
function isloggedIn(name = "nan") {
    return `${name} is logged in successfully`
}

// console.log(isloggedIn("nancy"));//with arguement
// console.log(isloggedIn());//without arguement

//Rest Operation in function
//...is reat operator in function

function addtoCart(...num1) { 
    return num1;
}
// console.log(addtoCart(127, 344, 899,343)); //it will return an array


function addtoCart1(val1,val2, ...num) { 
    return num;
}

// console.log(addtoCart1(127, 344, 899,343)); //it will return an array


const users = {
    name : "nancy",
    email : "nancykumari2630@gmail.com"
}

function getuserData (userData) {
    console.log(`my name is ${userData.name} my emailId is ${userData.email}`);
}
// getuserData(users)

// getuserData({
//     name : 'nancy'
// ,    email : 'test@mail.com'
// }); you can also us this like that


const score = [100,200,300,400];

function getScoreData(score) {
    console.log(score[3]);
}

// getScoreData(score);

//you can also do this like 

// getScoreData([600,300,233,600]);