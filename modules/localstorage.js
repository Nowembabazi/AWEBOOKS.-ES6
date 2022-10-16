import allBooks from './awesomebooks.js';

const getFromLocalStorage = () => {
  const stringifyArray = localStorage.getItem('storedBooks');
  allBooks.bookArray = JSON.parse(stringifyArray);
};

const addToLocalStorage = () => {
  const stringifyArray = JSON.stringify(allBooks.bookArray);
  localStorage.setItem('storedBooks', stringifyArray);
};

export { addToLocalStorage, getFromLocalStorage };
