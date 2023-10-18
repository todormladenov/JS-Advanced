class LibraryCollection {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }

    findBook(bookKey, bookValue) {
        return this.books.find(b => b[bookKey] === bookValue);
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let foundBook = this.findBook('bookName', bookName);

        if (!foundBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (foundBook.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        foundBook.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        let foundBook = this.findBook('bookName', bookName);

        if (!foundBook) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (!foundBook.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let indexOfBook = this.books.indexOf(foundBook);
        this.books.splice(indexOfBook, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let result = ``;

        if (!bookAuthor) {
            let emptySlots = this.capacity - this.books.length;
            result += `The book collection has ${emptySlots} empty spots left.\n`;

            result += this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
            .map(({bookName, bookAuthor, payed}) => `${bookName} == ${bookAuthor} - ${payed ? 'Has Paid' : 'Not Paid'}.`)
            .join('\n');

            return result
        }
        
        let foundBook = this.findBook('bookAuthor', bookAuthor);
    
        if (foundBook) {
            let {bookName, bookAuthor, payed} = foundBook;
            result += `${bookName} == ${bookAuthor} - ${payed ? 'Has Paid' : 'Not Paid'}.`

            return result;
        }

        throw new Error (`${bookAuthor} is not in the collection.`);
    }
}

// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());