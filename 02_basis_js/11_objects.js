// let dataObjects1  = new Object(); //singleton objecte

let dataObjects2 = {}; // non single to objects


dataObjects2.id = 1;
dataObjects2.name = "nancy";
dataObjects2.email = "nancy@google.com";

// console.log(dataObjects2);

//object  Property

// 1 object.assign

const obj1 = { 1 : "obj1"};
const obj2 = { 2 : "obj2"};
const obj3 = { 3 : "obj3"};
const obj4 = { 1 : "obj1"};


// const finalObjects = Object.assign({}, obj1,obj2, obj3); //it will vopy data to target objet from source data here {} is target object
// console.log(finalObjects);
// 2 speread operator used to combine objects

// const actualdata = {...obj1, ...obj2, ...obj3}; //combine objects using combine
// console.log(actualdata);

// console.log(Object.keys(obj1));//return keys of objects
// console.log(Object.values(obj1));//return value of obejct 
// console.log(Object.entries(obj1));//return each object values into an array

//hasOwnProperty check objects has propery or not its return boolean

// console.log(dataObjects2.hasOwnProperty('email'));//returns true
// console.log(dataObjects2.hasOwnProperty('mobie_numbr'));//returns false 
// console.log(Object.getPrototypeOf(obj1));//

// Object Destructuring

const books = {
    name : "power of subscouncious mind",
    language : "English",
    price : 340.00
};

const {language} = books;
// console.log(language);
const {language : lan} = books; //you can either made it change name 
// console.log(lan);