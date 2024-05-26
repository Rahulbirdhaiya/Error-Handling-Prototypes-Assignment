const books = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

function arrangeInOrderTitle(titles) {
    titles.sort()
    console.log(titles);
}

const titles = books.map(book => book.title);

arrangeInOrderTitle(titles);

//arranging author

function arrangeInOrderAuthor(authors) {
    authors.sort()
    console.log(authors);
}

const authors = books.map(book => book.author);

arrangeInOrderAuthor(authors);