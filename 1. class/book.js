
class Book{
    constructor(title,author){
        this.title = title;
        this.author = author;
    }
    getSummary(){
        return  `the title of the book is ${this.title} and the author of the book is ${this.author}`;
    }
}

const book = new Book("dsa the hard way " , "dheeraj mehra");
console.log(book.getSummary());