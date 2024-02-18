'use strict'
var gWord = ''
// sort simillar to filter almost identical - gSortBy - find the title they want

function onInit() {
    renderBooks()
}

function renderBooks() {
    const books = getBooks()
    const strHTMLs = books.map(book =>
        `<tr>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td><button class="read" onclick="onReadBook(event,'${book.id}')">read</button>
    <button class="update" onclick="onUpdateBook('${book.id}')">update</button>
    <button class="remove" onclick="onRemoveBook(event,'${book.id}')">delete</button></td><td>${book.rating}</td>`)
    const elTable = document.querySelector('.books-content')
    elTable.innerHTML = strHTMLs.join('')
    renderStats()
}

function renderStats() {
    const elExpensive = document.querySelector('.expensive')
    const elAverage = document.querySelector('.average')
    const elCheap = document.querySelector('.cheap')
    elExpensive.innerText = getExpensiveBooks()
    elAverage.innerText = getAverageBooks()
    elCheap.innerText = getCheapBooks()
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

function onReadBook(eve, bookId) {
    eve.stopPropagation()
    const book = readBook(bookId)
    const elBookDetails = document.querySelector('.book-details')
    const elSpan = elBookDetails.querySelector('h2 span')
    const elPre = elBookDetails.querySelector('pre')
    elPre.innerText = JSON.stringify(book, null, 2)
    elSpan.innerText = book.txt
    elBookDetails.showModal()

}


function onAddBook() {
    const title = prompt('give me a name')
    const price = +prompt('give me a price')
    if (!title || !price) return
    addBook(title, price)
    renderBooks()
}


function onSetFilterBy(elInput) {
    const filterBy = elInput.value
    setFilterBy(filterBy)

    renderBooks()
}

function onResetFilter() {

    setFilterBy('')
    renderBooks()

    // clean the inputs 
    const elTitle = document.querySelector('.book-title')
    elTitle.value = ""
}



function clearSearch() {
    var elFilter = document.querySelector('input')
    elFilter.innerHTML = ''
    gWord = ''
}