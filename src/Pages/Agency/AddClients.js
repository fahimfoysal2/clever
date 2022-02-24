import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-responsive-modal";

const AddClients = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="clients-added-area">
      <p>
        Client
        <Button variant="primary" onClick={onOpenModal}>
          Add Client
        </Button>
      </p>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
    </div>
  );
};

export default AddClients;
