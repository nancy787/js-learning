
//Objects
 //Singleton
//   Object.create
let symbol = Symbol('mykey');
//object literals
let userData = {
    name : "nancy",
    "full name" : "nancy kumari",
    age : 24,
    height : "5'4",
    weight : 50,
    [symbol] : "mykey",
    isonline : true,
    friends : ["kerul", "para"],
    email : "nancy@google.com",
};
// console.log(userData);
// console.log(typeof userData); //object
// to aceess these data iwith two methods
// console.log(userData.name); 
// console.log(userData['name']);2nd way and better way
// console.log( userData['symbol']);
// console.log(userData["full name"]);

userData.email = "nancy@microsoft.com"
// console.log(userData);
// Object.freeze(userData) //it is used to lock the atrributes

// userData.email = "nancy@gmail.com"
// console.log(userData);

userData.greeting = function() {
    return console.log("helo");
}
userData.welcome = function() {
    return console.log(`helo ${this.name}`);
}

console.log(userData.greeting());
console.log(userData.welcome());
console.log(userData);