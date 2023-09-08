import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SearchForm/SearchForm';
import SpeciesSearch from '../SearchForm/SearchForm';

export default function MyModal(props) {
  const [showModal, setShowModal] = useState(false);
  const { selectedSpeciesData } = props;;

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Plant Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Cycle: </p> 
          <p>Sunlight Needs: </p> 
          <p>Water Needs: </p> 
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
            Add to Crop Plan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};