const title = document.querySelector('.book_title');
const author = document.querySelector('.book_author');
const add = document.querySelector('.book_add');
const books_list = document.querySelector('.list');



function Book(book_id, title, author) {
  this.book_id = book_id;
  this.title = title;
  this.author = author;
}

const books = JSON.parse(localStorage.getItem('form')) ||[];

add.addEventListener('click', (event) => {
  event.preventDefault();
  const book_id = books.length;
  const newBook = new Book(book_id, title.value, author.value);
  books.push(newBook);
  localStorage.setItem('form', JSON.stringify(books));
  list();
  title.value = '';
  author.value = '';
});

function list() {
  books_list.innerHTML= '';
  books.forEach ((book) => {

    const eachBook = document.createElement('div');
    const book_id = book.book_id;
    eachBook.classList.add(book_id);

    const title_p = document.createElement('p');
    title_p.textContent = book.title;
    const author_p = document.createElement('p');
    author_p.textContent = book.author;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add(book_id);
    removeBtn.classList.add('remove');
    const line = document.createElement('hr');
  
    eachBook.appendChild(title_p);
    eachBook.appendChild(author_p);
    eachBook.appendChild(removeBtn);
    eachBook.appendChild(line);
    books_list.appendChild(eachBook);


  })
  
}

books_list.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    
    const remove = document.querySelector('.remove');
    remove.parentElement.remove();
    console.log(remove.classList[0]);
  }
});
