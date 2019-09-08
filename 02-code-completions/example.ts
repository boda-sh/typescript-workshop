// code completion example #1
function len(s: string) {
  return s.length; // <--- intellisense
}

// code completion example #2
function day(n: Date) {
  return n.getDay();
}

// code completion example #3
type Style = "primary" | "secondary" | "success" | "danger" | "warning" | "info";

class Button {
  constructor(style: Style) {
    this.style = style;
  }

  printStyle(): void {
    console.log(`The button style is ${this.style}`);
  }
}

let button1 = new Button(); // TODO: fill the blank here

// Difference between `type` and `interface`:
// Types are useful for union types (e.g. type MyType = TypeA | TypeB)
// whereas Interfaces are better for declaring dictionary shapes and 
// then `implementing` or `extending` them.

// In general if it's a plain object type, an interface is usually a better approach,
// if it's something can't be written as an interface, a type alias is better

// code completion example #4
interface Book {
  title: string;
  publishYear: number;
  author: string;
}

type BookProperty = keyof Book;

let book1 = new Book("book one", 2012, "someone");

const logPropertyValue = (key: BookProperty, book: Book) => {
  console.log(`${key}: ${book[key]}`);
}

logPropertyValue(, book1); // TODO: fill in the blank here