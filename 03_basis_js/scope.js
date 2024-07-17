
//global scope
let a = 10;
const b = 20;
var c = 30;
if (true) {
    //inner scope
    a = 12
    // console.log(a);
    c = 40
    // console.log(c);
} 
// console.log(c);  //c = 40 it should be not avalable outhside the block

// console.log(a) // a= 10;

//netsed shcope
//nested function
function one() {
    let userName = "nancy"; 

    function two() {
        //for two one is global scope
        let website = "youtube.com";
        console.log(userName); //global scope data
    }

    // console.log(website); //you cant access  innner scope
    two();
    
}

// one();
// console.log(addone()); //you can call this function any where
function addone(num){
    return num + 1;
}

// addone();
// console.log(AddTwo(2)) ;//you cannot call this function anywhee because it is holding in variable

const AddTwo = function(num) {
    return num+2;
} //it is called expression

// AddTwo(2);