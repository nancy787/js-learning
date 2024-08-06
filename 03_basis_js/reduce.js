const number = [1, 2, 3];


// initalValue = 0; 

// let total = number.reduce( function (accumulator, currecntvalue){
//     console.log(`acc ${accumulator}, currentval ${currecntvalue}`);
//     return accumulator + currecntvalue
// }, initalValue);

// console.log(total);

// initalValue = 0;

// let total =  number.reduce( (acc, currecntvalue) => {
//     return acc+currecntvalue
// }, initalValue);

// console.log(total);


let shoppingCart = [
    {
        courceName : 'python',
        courcePrice : 2999
    },  
    {
        courceName : 'web dev',
        courcePrice : 3999
    }, 
    {
        courceName : 'mobile dev',
        courcePrice : 5999
    }, 
    {
        courceName : 'mern stack dev',
        courcePrice : 7999
    },
]


//we need to fund toatl price

let cource = 0;
let totalCourcePrice = shoppingCart.reduce( (accumulator, item) => {
      return accumulator + item.courcePrice
}, 0);

// console.log(totalCourcePrice);