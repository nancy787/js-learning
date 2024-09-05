// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     } //when object inialize then consturo called first


//     encryptPasword() {
//         return console.log(`${this.password}abc`);
//     }

//     changeUserName() {
//         return console.log(`${this.username.toUpperCase()}`);
//     }
// }

// let users = new user('nancy', 'test@mail.com', 123);
// console.log(users.encryptPasword());
// console.log(users.changeUserName());
//Behiend the scene

function user(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
}
user.prototype.encryptPasword = function() {
    return console.log(`${this.password}abc`);s
}

user.prototype.changeUserName = function() {
    return console.log(`${this.username.toUpperCase()}`);
}
let users = new user('nancy', 'test@mail.com', 123);
console.log(users.encryptPasword());
console.log(users.changeUserName());
console.log(users);