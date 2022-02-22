import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import db from "../firebase-config";

const booksCollection = collection(db, "books");
class BookData {
  addBook = (newBook) => {
    return addDoc(booksCollection, newBook);
  };
  getAllBooks = () => {
    return getDocs(booksCollection);
  };
  deleteBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return deleteDoc(bookDoc);
  };
  updateBook = (id, book) => {
    const bookDoc = doc(db, "books", id);
    return updateDoc(bookDoc, book);
  };
  getOneBook = (id) => {
    const bookDoc = doc(db, "books", id);
    return getDoc(bookDoc);
  };
}

export default new BookData();
