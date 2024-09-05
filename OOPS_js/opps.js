const User = {
    name : 'nancy',
    isLoggedIn : 'yes',

    getUserDetails : function( ) {
       return console.log(`${this.name}`);
    }
};
// console.log(User.getUserDetails());

function user(username, logginCount, isLoggedIn){
    this.username = username;
    this.logginCount = logginCount
    this.isLoggedIn = isLoggedIn;
    this.greetings = function() {
        console.log(`welecome ${this.username}`);
    }
    return this
}

//new keyword creates instance 
// new keywods gives constructor functiin

let userOne = new user("nancy", 12, true);
let userTwo = new user("zoee", 1, false);
// console.log(userOne.constructor);
console.log(userOne instanceof user);
console.log(userOne instanceof Object);
// console.log(userTwo);

//step 1 new keywords creates a empty object is created called instance
// step 2 a constructor function is called cased of new keywods packed all the arguments
// step 2 this keyrword returns all the arguments
// step 4 return your data
