import Books from './modules/booksClass.js';
import DateTime from './modules/date.js';


const form = document.getElementById('form');
const newBook = new Books();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  newBook.submit();
});

const date = document.getElementById('date');
window.addEventListener('DOMContentLoaded', () => {
    date.innerHTML = DateTime.DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  });
