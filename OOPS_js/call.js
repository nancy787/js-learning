function setUserNAme(userName) {
    this.userName = userName;

}

function createUser(userName,email, password) {
    setUserNAme.call(this,userName); //call metod holds reference
    this.email = email;
    this.password = password
}

let Name = new createUser('nan', 'test@Mail.com', '111233');
console.log(Name);