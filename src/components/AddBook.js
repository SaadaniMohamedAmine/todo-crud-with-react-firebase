import { async } from "@firebase/util";
import React, { useState } from "react";
import boobData from "../services/bookServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBook = ({ status, set }) => {
  const notify = () => toast.success("A new book is added !!");
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    status: "available",
  });
  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await boobData.addBook(newBook);
    notify();
    set("updated for adding");
    set("updated again ");
    setNewBook({
      title: "",
      author: "",
      status: "available",
    });
  };
  return (
    <React.Fragment>
      <form action="" className="border  p-2 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title">Title</label>
          <input
            typ="text"
            className="form-control"
            name="title"
            id="title"
            value={newBook.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author">Author</label>
          <input
            typ="text"
            className="form-control"
            name="author"
            id="author"
            value={newBook.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="available"
              value="available"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="available">
              available
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="notAvailable"
              value="notAvailable"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="notAvailable">
              Not available
            </label>
          </div>
        </div>
        <div className="text-end">
          <button className="btn btn-danger">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </React.Fragment>
  );
};

export default AddBook;
