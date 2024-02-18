'use strict'

const BOOK_DB = 'bookDB'
var gBooks
var gFilterBy = ''
_createBooks()

function getBooks() {
    if (!gFilterBy) return gBooks

    var books = gBooks.filter((book) =>
        book.title.toLowerCase().includes(gFilterBy.toLowerCase())
    )
    return books
}

function _createBooks() {
    gBooks = loadFromStorage(BOOK_DB)
    if (gBooks.length === 0 || !gBooks) {
        gBooks = [
            createBook('My year of rest and relaxation', 180,),
            createBook('White oleander', 120),
            createBook('Tibetian book of the dead', 85),
        ]
        _saveBooks()
    }
}


function createBook(title, price) {
    return {
        id: makeId(),
        title,
        price,
        rating: getRandomInt(1, 6)
        // img
    }
}

function removeBook(ev, bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
    _saveBooks()
}

function updatePrice(price, bookId) {
    const book = gBooks.find(book => book.id === bookId)
    book.price = price
    renderBooks()
    _saveBooks()
}

function readBook(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return book
}

function addBook(title, price) {
    const newBook = createBook(title, price)
    gBooks.unshift(newBook)
    _saveBooks()
}


function getExpensiveBooks() {
    return gBooks.filter(book => book.price > 200).length
}

function getAverageBooks() {
    return gBooks.filter(book => book.price > 80 && book.price < 200).length
}

function getCheapBooks() {
    return gBooks.filter(book => book.price < 80).length
}

function _saveBooks() {
    saveToStorage(BOOK_DB, gBooks)
}

function setFilterBy(filterBy){
    gFilterBy = filterBy
}

// function setFilterBy(filterBy) {
//     gFilterBy = filterBy
// }

// function getFilterBy() {
//     return gFilterBy
// }