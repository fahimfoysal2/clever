import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-responsive-modal";

const AvailableSubscribers = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div className="juhfnhcc">
        <Button variant="primary" onClick={onOpenModal}>
          Purchase Upgrade
        </Button>
        <Modal open={open} onClose={onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    </div>
  );
};

export default AvailableSubscribers;
