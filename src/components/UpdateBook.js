import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import BookData from "../services/bookServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateBook = ({ book, status, set }) => {
  const notify = () => toast.success("The book is updated successfully!!");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newBook, setNewBook] = useState(book);
  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  const updateBook = async (book) => {
    await BookData.updateBook(newBook.id, newBook);
    notify();
    set("updated for updating");
    setShow(false);
  };

  return (
    <React.Fragment>
      <button className="btn btn-danger" onClick={handleShow}>
        <i className="bi bi-pen"></i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update the book info </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className="border  p-3 mx-auto">
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <input
                typ="text"
                className="form-control"
                name="title"
                id="title"
                defaultValue={newBook.title}
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
                defaultValue={newBook.author}
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
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateBook}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </React.Fragment>
  );
};

export default UpdateBook;
