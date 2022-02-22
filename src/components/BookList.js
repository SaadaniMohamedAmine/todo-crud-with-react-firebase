import React, { useState, useEffect } from "react";
import BookData from "../services/bookServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpdateBook from "./UpdateBook";
import OneBook from "./OneBook";

const BookList = ({ status, set }) => {
  const notify = () => toast.success("The book is deleted !!");
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const data = await BookData.getAllBooks();
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteBook = async (id) => {
    await BookData.deleteBook(id);
    notify();
    set("updated for deleting");
    set("updated again");
  };
  useEffect(() => {
    getBooks();
  }, [status]);

  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <th scope="row">{books.indexOf(book) + 1}</th>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.status}</td>
              <td>
                <div className="d-flex justify-content-between align-items-center h-100">
                  <button
                    className="btn btn-danger rounded"
                    onClick={() => deleteBook(book.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <UpdateBook book={book} status={status} set={set} />
                  <OneBook book={book} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default BookList;
