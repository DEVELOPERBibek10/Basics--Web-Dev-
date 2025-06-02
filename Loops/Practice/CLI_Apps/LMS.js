let input = require("prompt-sync")();

const books = [];

let isRunning = true;

let choice;

while (isRunning) {
  console.log("\nLibrary Management System");
  console.log("1. Add a Book");
  console.log("2. View All Books");
  console.log("3. Search for a Book");
  console.log("4. Borrow a Book");
  console.log("5. Exit the App\n");
  choice = parseInt(input("Enter your choice : "));
  switch (choice) {
    case 1:
      // Call function to add a book
      let title = String(input("Enter title of the book : "));

      addBook(Date.now(), title.toLowerCase().trim(), false);
      break;

    case 2:
      // Call function to view all books
      if (books.length > 0) {
        viewBooks();
      } else {
        console.log("\nNo books to show");
      }
      break;

    case 3:
      // Call function to search for a book
      if (books.length > 0) {
        let searchByTitle = String(
          input("Enter the title of the book to search : ")
        );
        searchBook(searchByTitle.toLowerCase().trim());
      } else {
        console.log("\nPlease add books to search");
      }
      break;

    case 4:
      // Call function to borrow a book

      if (books.length > 0) {
        let borrowById = parseInt(
          input("Enter the id of the book you want to borrow : ")
        );
        if (isNaN(borrowById)) {
          console.log("\nInvalid ID. Please enter a numeric ID.");
          break;
        }
        borrowBook(borrowById);
      } else {
        console.log("\nOops!! no books to borrow.");
      }
      break;

    case 5:
      console.log("\nExiting the app...");
      isRunning = false;
      break;

    default:
      console.log("\nInvalid choice. Please try again.");
  }
}

function addBook(id, title, borrowed) {
  books.push({ id: id, title: title, borrowed: borrowed });

  console.log("\nBook added sucessfully");
}
function viewBooks() {
  books.forEach(function (book) {
    console.log(
      `ID: ${book.id} | Title: ${book.title} | Borrowed: ${
        book.borrowed ? "✅" : "❌"
      }`
    );
  });
}

function searchBook(title) {
  let found = false;
  for (let book of books) {
    if (book.title === title) {
      found = true;
      console.log(
        `ID: ${book.id} | Title: ${book.title} | Borrowed: ${
          book.borrowed ? "✅" : "❌"
        }`
      );
      return;
    }
  }
  if (!found) {
    console.log("\nBook not found\n");
  }
}

function borrowBook(id) {
  let found = false;
  for (let book of books) {
    if (book.id === id) {
      found = true;
      if (!book.borrowed) {
        book.borrowed = true;
        console.log("\nBook borrowed sucessfully.");
        return;
      } else {
        console.log(
          `\nThe book with ID ${id} has already been borrowed. Please return it before borrowing again.`
        );
        return;
      }
    }
  }
  if (!found) {
    console.log("\nBook not found\n");
  }
}
