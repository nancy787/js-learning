//to iterate objects is forin loops

const frameWork = {
    js : 'nodejs',
    php : 'laravel',
    c : 'daptive Communication Environmen'
}
//  for (const key in frameWork) {
//         const element = frameWork[key];
//         console.log(element);
//  }



//  const data = ["nancy", "august", "23"];

//  for (const key in data) {
//     console.log(key);
//     console.log(data[key]);
//  }



let mydata = new Map();  //map store data in order wise and uniqe

mydata.set('name', 'nancy');
mydata.set('bff', 'kerul');
mydata.set('bff2', 'para');
mydata.set('name', 'nancy'); //if i set name key again then it wont set it again
//map is not itable;

// for (const [key] in mydata) {
//     console.log(key);
//     console.log(mydata);
// }
