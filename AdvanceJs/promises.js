//bluebird or que
const promiseOne = new Promise(function(resolve, reject){
    // promise examp db calls,cryptography
    setTimeout(function(){
        console.log("Async1 task is executed");
        resolve();
        //promise always comes later
    },1000);
});
promiseOne.then(function(){
    console.log('Promise execured');
});
//2nd way 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 task is executed");
        resolve();
    });
}).then(function(){
    console.log("Async 2 promise executed");
});

//3rd way

const promiseThird = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({
                name:"nancy",
                email :"nancykumari@mail.com"
            })
        },1000)
}).then(function(user){
    console.log(user);
    console.log("promive 3 resolved");
});

// Promise frour

const promiseFour = new Promise(function(resolve, reject){
    let errorD = false;
    if(!errorD) {
        setInterval(function(){
            resolve({
                userName : 'nancy bhagat',
                email : 'nancy@maial.com' 
            })
        },1000)
    }else{
        reject("Error : Something went weomg");
    }
});

promiseFour.then(function(user){
    console.log(user);
    console.log('promise 4 execureed');
    return user.userName;
}).then((userName) => {
    console.log(userName);
}).catch(function(errorD){
    console.log(errorD);
}).finally(() => console.log('The promise is either respolved or rejected')); //finaly isdefault


//Promise 5

const promiseFive = new Promise(function(resolve,reject){
    let error = false;
    if(!error) {
        setInterval(function(){
            resolve({
                userName : 'nancy bhagat',
                email : 'nancy@maial.com' 
            })
        },1000)
    }else{
        reject("Error : Something went weomg");
    }
});

async function consumePromiseFive(){
   try {
        const response = await promiseFive
   } catch (error) {
        console.log(error);
   }
}

consumePromiseFive();
// consumePromiseFive();


async function getAlluser(){
    try {
        const reponse = await fetch('https://api.github.com/users/nancy787')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`error  ${error}`);
    }
};

getAlluser();

fetch('https://api.github.com/users/nancy787')
.then((response) => {
    return response;
}).then((data) => {
    console.log(data);
})