const books = [
    { title : "book1", genre : "science", price:233,  publish : 2001 },
    { title : "book2", genre : "fiction", price:234  ,  publish : 2012},
    { title : "book3", genre : "science", price:235  ,  publish : 2010},
    { title : "book4", genre : "nonfiction", price:236  ,  publish : 2007},
    { title : "book5", genre : "fiction", price:237  ,  publish : 2018},
    { title : "boo6", genre : "nonfiction", price:238  ,  publish : 2020},
]


var bookData = books.filter( (book) => {
    return book.genre == "science"
});
 bookData = books.filter( (book) => {
    return book.publish >= 2010 && book.genre == "science";
});

console.log(bookData);