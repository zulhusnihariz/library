let bookRead = document.querySelectorAll('input[name = "readStatus"]');
const displayContainer = document.querySelector(".display-container");
const addButton = document.getElementById("add-book");

// Empty array to store information about books
let myLibrary = [];

// Create Book object
function Book(title, author, pages, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus;
	// the constructor
}
// set function addBooktoLibrary to Book Object
Book.prototype.addBookToLibrary = function (bookName) {
	myLibrary.push(bookName);
};

// create a card for each book in myLibrary and display onload
function displayBooks() {
	let booksCard;

	for (const books in myLibrary) {
		// loop and create div for every books that exist in Mylibrary
		d = document.createElement("div");
		displayContainer.appendChild(d);
		d.className = "booksCard";
		booksCard = document.querySelectorAll(".booksCard");

		// styling each div for title
		booksCard[books].style.border = "3px solid black";
		booksCard[books].style.textTransform = "uppercase";
		booksCard[books].style.backgroundColor = "#22223b";
		booksCard[books].textContent = myLibrary[books]["title"];
	}
	// call function to create button
	showAuthorPages(booksCard);
	createButton(booksCard);
}

// display new card when add button is clicked
function showNewBook() {
	d = document.createElement("div");
	displayContainer.appendChild(d);
	d.className = "booksCard";
	booksCard = document.querySelectorAll(".booksCard");

	for (const books in myLibrary) {
		// styling each div for title
		booksCard[books].style.border = "3px solid black";
		booksCard[books].style.textTransform = "uppercase";
		booksCard[books].style.backgroundColor = "#22223b";
		booksCard[books].textContent = myLibrary[books]["title"];
	}

	showAuthorPages(booksCard);
	createButton(booksCard);
}
// insert book author & number of pages in the card (in new div)
function showAuthorPages(booksCard) {
	let authorPages;
	// create another div within booksCard to display author & pages
	for (const books in myLibrary) {
		d2 = document.createElement("div");
		booksCard[books].appendChild(d2);
		d2.className = "authorPages";
		authorPages = document.querySelectorAll(".authorPages");
		// styling each div for author and pages
		authorPages[books].style.marginTop = "10px";
		authorPages[books].style.lineHeight = "2.6";
		authorPages[books].style.textTransform = "capitalize";
		authorPages[books].style.color = "#22223b";
		authorPages[books].style.display = "none";

		// add author and pages with break
		authorPages[books].innerHTML +=
			myLibrary[books]["author"] +
			"<br>" +
			myLibrary[books]["pages"] +
			" pages" +
			"<br>" +
			myLibrary[books]["readStatus"];
	}
}

//create update and delete button
function createButton(booksCard) {
	for (const books in myLibrary) {
		btn = document.createElement("BUTTON"); // Create a <button> element
		booksCard[books].appendChild(btn);
		btn.innerHTML = "Status"; // Insert text
		btn.id = "statusButton";

		btn2 = document.createElement("BUTTON"); // Create a <button> element
		booksCard[books].appendChild(btn2);
		btn2.innerHTML = "Delete"; // Insert text
		btn2.id = "deleteButton";

		// show author, pages, and button when hover over card
		booksCard[books].addEventListener("mouseover", e => {
			e.target.querySelector("#statusButton").style.display = "inline";
			e.target.querySelector("#deleteButton").style.display = "inline";
			e.target.querySelector(".authorPages").style.display = "block";
		});

		// hide author, pages, and button when hover away from  card
		booksCard[books].addEventListener("mouseleave", e => {
			e.target.querySelector("#statusButton").style.display = "none";
			e.target.querySelector("#deleteButton").style.display = "none";
			e.target.querySelector(".authorPages").style.display = "none";
		});
	}

	let statusButton = document.querySelectorAll("#statusButton");
	let deleteButton = document.querySelectorAll("#deleteButton");

	for (const btns in statusButton) {
		statusButton[btns].addEventListener("click", e => {
			//get content of e.target Parent
			let p = e.target.parentElement;
			let parentNodeTitle = p.childNodes[0].textContent;
			let authorPagesElement = p.childNodes[1];
			let currentRead = authorPagesElement.childNodes[4];

			if (currentRead.textContent == "Have not read yet") {
				currentRead.textContent = "Have read";
				changeReadStatusInLibrary(parentNodeTitle, currentRead);
			} else if (currentRead.textContent == "Have read") {
				currentRead.textContent = "Have not read yet";
			}

			console.log(myLibrary);
		});
	}

	// Assign add event listener to every delete button
	for (const btns in deleteButton) {
		deleteButton[btns].addEventListener("click", e => {
			//get content of e.target Parent
			let p = e.target.parentElement;
			let parentNodeTitle = p.childNodes[0].textContent;
			//get content title
			removeBookFromLibrary(parentNodeTitle);
			e.target.parentNode.remove();
			console.log(myLibrary);
		});
	}
}

function changeReadStatusInLibrary(parentNodeTitle, currentRead) {
	// loop through myLibrary by index; if title is equal to parentElement's title, remove it
	for (i = 0; i < myLibrary.length; i++) {
		if (myLibrary[i]["title"] == parentNodeTitle) {
			myLibrary[i]["readStatus"] = currentRead.textContent;
		}
	}
}

// Remove book from myLibrary when delete button is pressed
function removeBookFromLibrary(parentNodeTitle) {
	// loop through myLibrary by index; if title is equal to parentElement's title, remove it
	for (i = 0; i < myLibrary.length; i++) {
		if (myLibrary[i]["title"] == parentNodeTitle) {
			myLibrary.splice(i, 1);
		}
	}
}

// clear input field once added to myLibrary
function clearField() {
	document.getElementById("book-title").value = "";
	document.getElementById("book-author").value = "";
	document.getElementById("book-pages").value = "";
}

// onclick event for add book button
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
	newBook.addBookToLibrary(newBook);
	showNewBook();
	e.preventDefault();
	clearField();
	console.log(myLibrary);
});

// temporary
const book1 = new Book(
	"12 Rules for Life",
	"Jordan Peterson",
	"489",
	"Have read"
);

const book2 = new Book("The Widow", "Fiona Barton", "324", "Have read");

const book3 = new Book(
	"Fahrenheit 451",
	"Rad Bradbury",
	"194",
	"Have not read yet"
);

const book4 = new Book(
	"The Gulag Archipelago",
	"Aleksandr Solzhenitsyn",
	"472",
	"Have not read yet"
);

const book5 = new Book("The Republic", "Plato", "416", "Have not read yet");
const book6 = new Book(
	"Dunia Tanpa Tembok ",
	"Ayman Rashdan Wong",
	"245",
	"Have not read yet"
);

book1.addBookToLibrary(book1);
book2.addBookToLibrary(book2);
book3.addBookToLibrary(book3);
book4.addBookToLibrary(book4);
book5.addBookToLibrary(book5);
book6.addBookToLibrary(book6);

window.onload = displayBooks;

console.log("refreshed");
