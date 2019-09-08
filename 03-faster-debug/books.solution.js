/**
 * Same code copied over from the `books.js` file,
 * immediately we get type errors and easier to debug
 */
var Book = /** @class */ (function () {
    function Book(title, publishYear, author) {
        this.title = title;
        this.publishYear = publishYear;
        this.author = author;
    }
    Book.prototype.logInfo = function () {
        console.log("Book title: " + this.title + ", released " + this.publishYear + " by " + this.author);
    };
    return Book;
}());
var Books = /** @class */ (function () {
    function Books(books) {
        this.books = books;
    }
    Books.prototype.logInfo = function () {
        console.log("List of books ...");
        for (var i = 0; i < this.books.length; i++) {
            this.books[i].logInfo();
        }
    };
    return Books;
}());
var book1 = new Book("The Philosopher's Stone", 1997, "J. K. Rowling");
var book2 = new Book("The Chamber of Secrets", 1998, "J. K. Rowling");
var harryPotter = new Books([book1, book2]); // !!! we spotted the error here!
// solution 1:
// pass as one array, `new Books([books1, book2])`
//
// solution 2:
// re-factor the constructor parameter `books` to `...books`
harryPotter.logInfo();
