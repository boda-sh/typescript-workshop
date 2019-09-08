// Same code copied over from the `books.js` file,
// immediately we get type errors and easier to debug

class Book {
  constructor(title, publishYear, author) {
    this.title = title;
    this.publishYear = publishYear;
    this.author = author;
  }

  logInfo() {
    console.log(`Book title: ${this.title}, released ${this.publishYear} by ${this.author}`);
  }
}

class Books {
  constructor(books) {
    this.books = books;
  }

  logInfo() {
    console.log("List of books ...");
    
    for (let i = 0; i < this.books.length; i++) {
      this.books[i].logInfo();
    }
  }
}

let book1 = new Book("The Philosopher's Stone", 1997, "J. K. Rowling");
let book2 = new Book("The Chamber of Secrets", 1998, "J. K. Rowling");
let harryPotter = new Books(book1, book2); // !!! we spotted the error here!

// solution 1:
// pass as one array, `new Books([books1, book2])`
//
// solution 2:
// re-factor the constructor parameter `books` to `...books`

harryPotter.logInfo();