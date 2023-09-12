import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../SearchForm/SearchForm';

export default function MyModal(props) {
  const [showModal, setShowModal] = useState(false);
  const { selectedSpeciesData } = props;

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button class="btn" variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSpeciesData.common_name.toUpperCase()} DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Cycle: {selectedSpeciesData.cycle}</p>
          <p>Sunlight Needs: {selectedSpeciesData.sunlight}</p>
          <p>Water Needs: {selectedSpeciesData.watering}</p>
        </Modal.Body>
         <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add to Crop Plan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


