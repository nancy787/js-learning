//in js everything is object

function multiplyBy5(num) {
    return num*5;
}

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.prototype);
// multiplyBy5.power = 5
// console.log(multiplyBy5.power);

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    return this.score++;
}

//jis ka matlab this

createUser.prototype.printMe = function() {
    console.log(`score is ${this.score}`);
}
const userdata = new createUser('nanct', 34);
const userdata1 = new createUser('nanct', 4);
userdata.printMe();
userdata1.printMe();