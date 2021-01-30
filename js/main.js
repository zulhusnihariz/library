let bookRead = document.querySelectorAll('input[name = "readStatus"]');
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
	let booksCard;
	let authorPages;
	for (const books in myLibrary) {
		d = document.createElement("div");
		displayContainer.appendChild(d);
		d.className = "booksCard";
		booksCard = document.querySelectorAll(".booksCard");
		booksCard[books].style.border = "3px solid black";
		booksCard[books].style.textTransform = "uppercase";
		booksCard[books].style.backgroundColor = "#22223b";
		booksCard[books].textContent = myLibrary[books]["title"];

		d2 = document.createElement("div");
		booksCard[books].appendChild(d2);
		d2.className = "authorPages";
		authorPages = document.querySelectorAll(".authorPages");
		authorPages[books].style.marginTop = "10px";
		authorPages[books].style.lineHeight = "2.6";
		authorPages[books].style.textTransform = "capitalize";
		authorPages[books].style.color = "#22223b";
		authorPages[books].innerHTML +=
			myLibrary[books]["author"] +
			"<br>" +
			myLibrary[books]["pages"] +
			" pages";
	}
}

function clearField() {
	document.getElementById("book-title").value = "";
	document.getElementById("book-author").value = "";
	document.getElementById("book-pages").value = "";
}

addButton.addEventListener("click", e => {
	let newBook;
	let readStatus;
	let bookTitle;
	let bookAuthor;
	let bookPages;

	bookTitle = document.getElementById("book-title").value;
	bookAuthor = document.getElementById("book-author").value;
	bookPages = document.getElementById("book-pages").value;

	for (const option of bookRead) {
		if (option.checked) {
			readStatus = option.value;
			break;
		}
	}

	newBook = new Book(bookTitle, bookAuthor, bookPages, readStatus);

	console.log(bookTitle);
	console.log(bookAuthor);
	console.log(bookPages);
	console.log(readStatus);

	newBook.addBookToLibrary(newBook);
	displayBooks();
	e.preventDefault();
	clearField();
	console.log(myLibrary);
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

const book5 = new Book("The Republic", "Plato", "416", "not read yet");
const book6 = new Book(
	"Dunia Tanpa Tembok ",
	"Ayman Rashdan Wong",
	"245",
	"not read yet"
);

book1.addBookToLibrary(book1);
book2.addBookToLibrary(book2);
book3.addBookToLibrary(book3);
book4.addBookToLibrary(book4);
book5.addBookToLibrary(book5);
book6.addBookToLibrary(book6);

window.onload = displayBooks;

console.log("refreshed");
