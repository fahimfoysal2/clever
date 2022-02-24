import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-responsive-modal";

const EditProfile = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="edit-profile-view">
      <p onClick={onOpenModal}>Edit details</p>
      <Modal open={open} onClose={onCloseModal} center>
        <Form>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Name:" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" placeholder="" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default EditProfile;
