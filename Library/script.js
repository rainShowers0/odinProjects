class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;    
    }

}

let library = [];
const books = document.getElementsByClassName('books');

const book1 = new Book('Shrek', 'Howard', '23');
library.push(book1);

library.forEach(book => { 
    const div = document.createElement('div');
    div.className = 'book';
    books.append(div);
    const title = document.createElement('')
});