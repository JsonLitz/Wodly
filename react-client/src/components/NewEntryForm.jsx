import React from 'react';
import {Modal, Button} from 'react-bootstrap';

var NewEntryForm = () =>(
      <Modal
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>

        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );

export default NewEntryForm;
