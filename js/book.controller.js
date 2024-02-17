'use strict'


function onInit() {
    renderBooks()
}

function renderBooks() {
    const books = getBooks()
    const strHTMLs = books.map(book =>
        `<tr>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td><button onclick="onReadBook('${book.id}')">read</button><button onclick="onUpdateBook('${book.id}')">update</button><button onclick="onRemoveBook(event,'${book.id}')">delete</button></td></tr>`)
    const elTable = document.querySelector('table')
    elTable.innerHTML = strHTMLs.join('')
}

function onRemoveBook(ev, bookId) {
    ev.stopPropagation()
    removeBook(bookId)
    renderBooks()
    console.log('f')
}


function onUpdateBook(bookId) {
    console.log(bookId)
    const price = prompt('give me a new price')
    updatePrice(price, bookId)
    renderBooks()
}

function onReadBook() {
    console.log('haha')
}


function onAddBook() {
    const title = prompt('give me a name')
    const price = +prompt('give me a price')
    if (!title || !price) return
    addBook(title, price)
    renderBooks()
}
