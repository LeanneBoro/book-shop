'use strict'
var gBooks
createBooks()

function getBooks() {
    return gBooks
}

function createBooks() {
    if (!gBooks) {
        gBooks = [
            createBook('My year of rest and relaxation', 180,),
            createBook('White oleander', 120),
            createBook('Tibetian book of the dead', 85),
        ]
        // _saveTodos()
    }
}


function createBook(title, price) {
    return {
        id: makeId(),
        title,
        price
        // img
    }
}

// function _saveBooks() {
//     saveToStorage(TODO_DB, gBooks)
// }
function removeBook(ev,bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
}

function updatePrice(price, bookId) {
    const book = gBooks.find(book => book.id === bookId)
    book.price = price
    renderBooks()
}

function readBook(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return book
}

function addBook(title,price) {
    const newBook = createBook(title, price)
    gBooks.unshift(newBook)
}