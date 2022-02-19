class Book {
    constructor(title, author, pages) {
        this.title = `Title: ${title}`;
        this.author = `Author: ${author}`;
        this.pages = `Number of Pages: ${pages}`;    
    }
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let library = [];
const books = document.getElementById('books');
const addBtn = document.getElementById('addBtn');
// The input fields 
const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById('pages');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    removeChildNodes(books);
    let newBook = new Book(formTitle.value, formAuthor.value, formPages.value,);
    library.push(newBook);
    
    library.forEach(book => { 
        if (book === undefined) return;
        const div = document.createElement('div');
        //  node attributes for the div
        div.className = 'book';
        div.setAttribute('id', `${library.length - 1}`);

        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');

        
        // The button to remove the Book from the HTML and the array,
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove Book';
        removeBtn.addEventListener('click', (e) => {
            library.splice(library[e.target.parentElement.getElementById], 1)
            div.remove()
        })
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;

        div.append(title);
        div.append(author);
        div.append(pages);
        div.append(removeBtn);
        books.append(div);

    });
    // To clear the input fields
    formTitle.value = ''
    formAuthor.value = ''
    formPages.value = ''
})
