//Immediately Invoked function Expression (IIFE)
//sometimes we want to call function immediately to get rid of global pollution

// (function database() {
    //named IIFE
//     console.log(`DB Connected`);
// })();

//usieng arraow function

( ( ) => {
    console.log(`DB Connected`);
})();