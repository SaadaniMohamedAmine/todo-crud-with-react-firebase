import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const OneBook = ({ book }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <button className="btn btn-danger" onClick={handleShow}>
        <i className="bi bi-info-circle"></i>
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Title : {book.title}</h3>
          <h3>Author : {book.author}</h3>
          <h3>Status : {book.status}</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default OneBook;
