const books = [
  { title: "Book1", author: "Author1", year: 2021, price: 500 },
  { title: "Book2", author: "Author2", year: 2022, price: 600 },
];


function addBook() {
  const title = prompt("Enter book title:");
  const author = prompt("Enter book author:");
  const year = prompt("Enter book year:");
  const price = prompt("Enter book price:");

  
  if (title && author && year && price) {
    const book = {
      title,
      author,
      year,
      price,
    };
    books.push(book);
    alert("Add book successfully");
  } else {
    alert("Please enter all fields");
  }
}

function viewBooks() {
  let bookList = "All book list:\n";
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    bookList += `title: ${book.title}, author: ${book.author}, year: ${book.year}, price: ${book.price} Baht\n`;
  }
  alert(bookList);
}

function editBook() {
  const index = prompt("Enter index:") - 1;

  if (index >= 0 && index < books.length) {
    const book = books[index];
    const newTitle = prompt(`title: ${book.title}\nEnter new title:`) || book.title;
    const newAuthor = prompt(`author: ${book.author}\nEnter new author:`) || book.author;
    const newYear = prompt(`year: ${book.year}\nEnter new year:`) || book.year;
    const newPrice = prompt(`price: ${book.price}\nEnter new price:`) || book.price;

    book.title = newTitle;
    book.author = newAuthor;
    book.year = newYear;
    book.price = newPrice;

    alert("Edit book successfully");
  } else {
    alert("Book not found");
  }
}

function deleteBook() {
  const index = prompt("Enter index:") - 1;

  if (index >= 0 && index < books.length) {
    const deletedBook = books.splice(index, 1);
    alert(`Delete "${deletedBook[0].title}" Already`);
  } else {
    alert("Book not found");
  }
}

function showMenu() {
  const choice = prompt(
    "Select menu\n1. Add book\n2. View all books\n3. Edit book\n4. Delete book\n5. Exit"
  );

  switch (choice) {
    case "1":
      addBook();
      break;
    case "2":
      viewBooks();
      break;
    case "3":
      editBook();
      break;
    case "4":
      deleteBook();
      break;
    case "5":
      alert("Thank you for using our system!");
      break;
    default:
      alert("Invalid choice");
      break;
  }
}

while (true) {
  showMenu();
}
