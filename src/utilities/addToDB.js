import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const getStoredBooks = (key) => {
  const storedBooks = localStorage.getItem(key);
  return storedBooks ? JSON.parse(storedBooks) : [];
};

export const addToStoreDB = (id, key) => {
  const books = getStoredBooks(key);

  if (books.includes(id)) {
    toast(`This book is already in your ${key}`);
  } else {
    books.push(id);
    localStorage.setItem(key, JSON.stringify(books));
    Swal.fire({
      title: `Added to ${key}`,
      text: `Book ID ${id} added to ${key}`,
      icon: "success",
    });
    console.log();
  }
};
