// A more complex example, where the code still is executable,
// and without TypeScript it's hard to spot the error easily

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
let harryPotter = new Books(book1, book2);

harryPotter.logInfo();