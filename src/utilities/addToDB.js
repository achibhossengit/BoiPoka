export const getStoredBooks = (key) => {
  const storedBooks = localStorage.getItem(key);
  return storedBooks ? JSON.parse(storedBooks) : [];
};

export const addToStoreDB = (id, key) => {
  const books = getStoredBooks(key);

  if (books.includes(id)) {
    alert(`This book is already in your ${key}`);
  } else {
    books.push(id);
    localStorage.setItem(key, JSON.stringify(books));
    console.log(`Book ID ${id} added to readlist`, books);
  }
};
