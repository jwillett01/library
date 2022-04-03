let myLibrary = [];

function Book(title, author, numberOfPages, read) {
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    if (read) {this.read = "has been read"} else {this.read = "not yet read"}
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.numberOfPages + " pages, " + this.read
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBook(myLibrary) {
    myLibrary.forEach(book => {
        var newBook = document.createElement("p")
        newBook.innerHTML = book.info()
        document.body.appendChild(newBook)
    })
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 256, true);
let whatTheDogSaw = new Book('What the Dog Saw', 'Malcolm Gladwell', 410, false);
let trainDreams = new Book('Train Dreams', 'Denis Johnson', 116, false);

addBookToLibrary(theHobbit);
addBookToLibrary(whatTheDogSaw);
addBookToLibrary(trainDreams);