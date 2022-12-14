//ui object

const ui = new UI()

// event elements
const form = document.querySelector("form");

//events
form.addEventListener('submit', addBook)

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

    //delete input value from input fields
    TitleInPut.value = ''
    AuthorInPut.value = ''
    ISBNInPut.value = ''
    event.preventDefault()

    document.getElementById('table').innerHTML += TableData;
}