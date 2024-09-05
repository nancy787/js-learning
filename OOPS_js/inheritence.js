class User {
    constructor(usename) {
        this.usename = usename;
    }

    logMe () {
        console.log(`this user name is looged in ${this.usename}`);
    }
}

class Teacher extends User {
    constructor (username, email, password) {
        super(username); //super keywords is used to retuern data wthout using this from the parent class
        this.email = email;
        this.password = password;
    }

    userData() {
        console.log(`teacher name is ${this.usename}`);
    }
}

let data = new Teacher('test', 'test@mail.com', 1234)
data.userData();
data.logMe();
let userdata = new User('nancy');
userdata.logMe();
console.log(userdata instanceof User);