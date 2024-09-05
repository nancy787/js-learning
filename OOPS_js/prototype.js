let myNAme = "nancy   ";
let myNAme2 = "nssancy   ";

let myheros = ['saktiman', 'thor'];

let heroPoerer = {
    sktiman : 'spark',
    thor : 'hammer',
    getPoewr : function() {
        console.log(`thor hai ${this.thor} power`);
    }
}

Object.prototype.nancy = function() {
    console.log('nancy object prototype presents in objects');
}
Array.prototype.HeyNancy = function() {
    console.log('this prototype present in all obejct');
}
// heroPoerer.nancy();
// heroPoerer.HeyNancy(); //this prototype is only definderd in the objects
// myheros.nancy();
// myheros.HeyNancy();

// const User = {
//     name : 'nancy',
//     email : 'test@mail.com',
//     isLoggedIn : true
// }
// const Teacher =  {
//     makeVideo : false
// }

// const TeachingSupport  ={
//     isAvailable : false
// }

// const TAsupport = {
//     makeAssingment : true,
//     isAvailable :true,
//     __proto__ : TeachingSupport //__proto__ use to link objects or other proopertis like inheritence
// }

// Teacher.__proto__ = user;
// Object.setPrototypeOf(TAsupport, Teacher)

const GetName = 'Nanc         ';
String.prototype.trimSpace  = function() {
    console.log(`${this.trim()}`);
}

GetName.trimSpace();