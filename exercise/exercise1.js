const books = [
    { title : "book1", genre : "science", price:233 },
    { title : "book2", genre : "fiction", price:234 },
    { title : "book3", genre : "science", price:235 },
    { title : "book4", genre : "nonfiction", price:236 },
    { title : "book5", genre : "fiction", price:237 },
    { title : "boo6", genre : "nonfiction", price:238 },
]


const bookData = books.filter( (book) => {
    return book.genre == "science"
});

console.log(bookData);