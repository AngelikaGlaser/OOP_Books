class LS {
    //help functions to get and set LS data

    getData(name) {
        let data
        if (localStorage.getItem(name) === null) {
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(name))
        }
        return data
    }

    setData(name, data){
            localStorage.setItem(name, JSON.stringify(data))
    }

    addBook(book){
        let books = this.getData('books')
        books.push(book)
        this.setData('books',books)
    }
    delBook(book){
        let books = this.getData('books')
        books.forEach(function (booksFromLS, bookIndex){
            if(booksFromLS.title === book.title && booksFromLS.author === book.author && booksFromLS.ISBN === book.ISBN){
                books.splice(bookIndex, 1)
            }
        })
        this.setData('books', books)
    }
}