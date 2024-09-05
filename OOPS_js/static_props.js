// static method is used does not give access to use that method

class User {
    constructor (username) {
        this.username = username;
    }
    logMe() {
        console.log(`hello ${this.username}`);
    }
   static getUserData() {
        console.log(`${this.username}`);
    }
}

class Teacher extends User {
    constructor (username, email) {
        super(username); //it is callted only once from the parent class
       this.email = email;
    }

    getData () {
        console.log(`${this.username}`);
    }
}

let getTeacher = new Teacher('nanec', 'test@mail.com');
getTeacher.getData();
getTeacher.getUserData();
const userdata = new User('test');
// console.log(userdata);