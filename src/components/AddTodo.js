import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Modal } from "react-bootstrap";

const AddTodo = ({ addTodo, getAllTodos }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const notify = () => toast.success("New Todo is added !");
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    owner: "",
    status: "notDone",
  });
  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    notify();
    handleClose();
    getAllTodos();
    setTodo({
      title: "",
      description: "",
      owner: "",
      status: "notDone",
    });
  };
  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow} className="d-block">
        Add task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new task !!</Modal.Title>
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
                value={todo.title}
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
                value={todo.description}
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
                value={todo.owner}
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
      {/*  */}
      <ToastContainer />
    </React.Fragment>
  );
};

export default AddTodo;
