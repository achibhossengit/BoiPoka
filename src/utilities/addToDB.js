export const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("readlist");
  return storedBooks ? JSON.parse(storedBooks) : [];
};

export const addToStoreDB = (id) => {
  const books = getStoredBooks();

  if (books.includes(id)) {
    alert("This book is already in your readlist!");
  } else {
    books.push(id);
    localStorage.setItem("readlist", JSON.stringify(books));
    console.log(`Book ID ${id} added to readlist`, books);
  }
};
