// Task 1: Creating a Book Class
console.log("********** Created Book Class **********");
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    updateCopies(quantity) {
        this.copies += quantity;
    }
}
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Expected Output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1);
console.log(book1.getDetails()); // Expected Output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 2: Creating a Borrower Class
console.log("********** Created Borrower Class **********");
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }
}
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Expected output: []

// Task 3: Creating a Library Class
console.log("********** Created Library Class **********");
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }
    lendbook(borrowerId, isbn) { // Task 4 Method
        const book = this.books.find(b => b.isbn === isbn);
        if (book && book.copies > 0) {
            book.updateCopies(-1);
            const myborrower = this.borrowers.find(b => b.borrowerId === borrowerId);
            if (myborrower) {
                myborrower.borrowBook(book.title);
            }
        }
    }
}
const library = new Library();
library.addBook(book1);
library.listBooks(); // Expected Output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 4: Implementing Book Borrowing
console.log("********** Implemented Book Borrowing **********");
library.addBorrower(borrower1); // Adding borrower to the library
library.lendbook(201, 123456);
console.log(book1.getDetails()); // Expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks); // Expected output: ["The Great Gatsby"]