//ui and LS objects
const ui = new UI()
const ls = new LS()
// event elements
const form = document.querySelector("form");

//events
form.addEventListener('submit', addBook)
document.addEventListener('DOMContentLoaded', getBooks)
const bookList = document.querySelector("table")
bookList.addEventListener('click', delBook)

function getBooks(){
    let books = ls.getData('books')
    for(let i = 0; i < books.length; i ++){
        let book = books[i];
        ui.addBook(book)
    }
}

function addBook(event) {

    //get the different input values
    const TitleInPut = document.querySelector('#title')
    const AuthorInPut = document.querySelector('#author')
    const ISBNInPut = document.querySelector('#ISBN')

    let title = TitleInPut.value
    let author = AuthorInPut.value
    let ISBN = ISBNInPut.value

    // create book
    const book = new Book(title, author, ISBN)
    // add book value visual to ui object
    ui.addBook(book)
    //add book to LS
    ls.addBook(book)
    //delete input value from input fields
    TitleInPut.value = ''
    AuthorInPut.value = ''
    ISBNInPut.value = ''
    event.preventDefault()
}

function delBook(event){
    if (event.target.textContent === 'X'){
        const book = ui.getBook(event.target)
        if(ui.delBook(event.target) === true){
            ls.delBook(book)
        }
    }
}