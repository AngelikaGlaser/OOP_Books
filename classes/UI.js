class UI {
    // help function to add DOM el

    addUIElement(name, classname = '', textcontent = '', atributes = {}){
        // create el
        const element = document.createElement(name)
        // add cc style to el
        if(classname!== ''){
            element.className = classname
        }
        //add text to el
        element.appendChild(document.createTextNode(textcontent))
        // add atrubutes to el
        if(Object.keys(atributes).length > 0){
            for(let key in atributes){
                element.setAttribute(key, atributes[key])
            }
        }
        return element
    }

    addBook(book){
        //create tr el
        const tr = this.addUIElement('tr')
        // td for title author and ISBN
        for(let name in book){
            // create td el and add text
            let td = this.addUIElement('td','', book[name])
            //add td to tr
            tr.appendChild(td)
        }
        // x link
        //create td el
        let td = this.addUIElement('td')
        //create a el
        const link = this.addUIElement('a', '', 'X', {'href':'#'})
        // add link to td
        td.appendChild(link)
        //add td to tr
        tr.appendChild(td)
        //add tr to tbody
        const booksList = document.querySelector('#books-list')
        booksList.appendChild(tr)
    }
}