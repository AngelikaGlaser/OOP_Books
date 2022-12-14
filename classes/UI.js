class UI {
    addBook(book){
        //create tr el
        const tr = document.createElement('tr')
        // td for title authpr and ISBN
        for(let name in book){
            // create td el
            let td = document.createElement('td');
            // create text el
            let text = document.createTextNode(book[name]);
            // add txt to td
            td.appendChild(text);
            //add td to tr
            tr.appendChild(td);
        }
        // x link
        //create td el
        let td = document.createElement('td');
        //create a el
        const link = document.createElement('a');
        // set href atribute to a
        link.setAttribute('href', '#');
        // add text content to a
        link.appendChild(document.createTextNode('X'));
        // add a to td
        td.appendChild(link);
        //add td to tr
        tr.appendChild(td);
        //add tr to tbody
        const booksList = document.querySelector('#books-list')
        booksList.appendChild(tr);
    }
}