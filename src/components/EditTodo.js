import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditTodo = ({ todo, getAllTodos, updateTodo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const notify = () => toast.success("Todo is edited successfully !!");
  ////
  const [newTodo, setNewTodo] = useState(todo);
  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, newTodo);
    notify();
    getAllTodos();
    handleClose();
  };
  return (
    <React.Fragment>
      <button
        className="border-0 btn-transition btn btn-outline-primary"
        onClick={handleShow}
      >
        {" "}
        <i className="fa fa-pencil-square-o" />{" "}
      </button>{" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit this todo !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action=""
            className="border w-100 p-5 mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                value={newTodo.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={newTodo.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="owner" className="form-label">
                Owner
              </label>
              <input
                type="text"
                className="form-control"
                name="owner"
                id="owner"
                value={newTodo.owner}
                onChange={handleChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default EditTodo;
