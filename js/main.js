const bookTitle = document.getElementById("book-title").value;
const bookAuthor = document.getElementById("book-author").value;
const bookPages = document.getElementById("book-pages").value;
const bookRead = document.querySelectorAll('input[name = "readStatus"]');
const displayContainer = document.querySelector(".display-container");

const addButton = document.getElementById("add-book");

let myLibrary = [];

function Book(title, author, pages, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus;
	// the constructor
}

Book.prototype.addBookToLibrary = function (bookName) {
	myLibrary.push(bookName);
};

function displayBooks() {
	for (const books in myLibrary) {
		d = document.createElement("div");
		displayContainer.appendChild(d);
		d.className = "booksCard";
	}

	let booksCard = document.querySelectorAll(".booksCard");

	for (const books in myLibrary) {
		booksCard[books].style.border = "3px solid black";
		booksCard[books].style.backgroundColor = "#22223b";

		booksCard[books].textContent = myLibrary[books]["title"];
	}
}

addButton.addEventListener("click", e => {
	let newBook;
	let readStatus;

	for (const option of bookRead) {
		if (option.checked) {
			readStatus = option.value;
			break;
		}
	}

	newBook = new Book(bookTitle, bookAuthor, bookPages, readStatus);

	newBook.addBookToLibrary(newBook);
	displayBooks();

	e.preventDefault();
});

const book1 = new Book(
	"12 Rules for Life",
	"Jordan Peterson",
	"489",
	"have read"
);

const book2 = new Book("The Widow", "Fiona Barton", "324", "have read");

const book3 = new Book("Fahrenheit 451", "Rad Bradbury", "194", "not read yet");

const book4 = new Book(
	"The Gulag Archipelago",
	"Aleksandr Solzhenitsyn",
	"472",
	"not read yet"
);

const book5 = new Book("The Republic ", "Plato", "416", "not read yet");

book1.addBookToLibrary(book1);
book2.addBookToLibrary(book2);
book3.addBookToLibrary(book3);
book4.addBookToLibrary(book4);
book5.addBookToLibrary(book5);

window.onload = displayBooks;

console.log("refreshed");
