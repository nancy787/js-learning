
// forof loops to iterate arrays

// const arr = [1,9.3,4];
// for (const val of arr) {
//      console.log(val);
// }

// let mydata = new Map();  //map store data in order wise and uniqe

// mydata.set('name', 'nancy');
// mydata.set('bff', 'kerul');
// mydata.set('bff2', 'para');
// mydata.set('name', 'nancy'); //if i set name key again then it wont set it again
// // console.log(mydata); //op shoud be 3 objecy

// // looping on Map

// for (const [val, data] of mydata) {
//      console.log(val); //reurn in array data
//      console.log(data);
// }


const mydata = {
    name: "nancy",
    age:24,
    birthplace : "patna",
    friend  : ['kerul', 'para']
}

for (const [key] of mydata) {
    console.log(mydata);
   //in forof looop objects is not iterable
}


//forin maps,string arrays are iterable