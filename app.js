//Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


// UI Constructor
function UI(){}

//add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    //create tr element
    const row = document.createElement('tr');

    //insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>
    `;

    list.appendChild(row);
}

    //clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
    //get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

          //instantiate book
          const book = new Book(title, author, isbn);

          //Instantiate UI
    const ui = new UI();

    //validate
    if(title === '' || author === ''|| isbn === ''){
        // Error Alert
        UI.showAlert()
    } else {
        //Add book to list
        ui.addBookToList(book);

        //clear fields
        ui.clearFields();
    }


    e.preventDefault();
});





































// //Event Listeners...
// document.getElementById('book-form').addEventListener('submit', function(e){
//     // get form values...
//     const title = getElementById('title').value;
//     const  author = getElementById('author').value;
//     const isbn = getElementById('isbn').value;

//           //instantiating book
//     const book = new Book(title, author, isbn);

//     console.log(book);


// });