import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Modal from "react-responsive-modal";

const ClientsLi = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num >= 0) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <Container fluid>
      <Button variant="primary" onClick={onOpenModal}>
        Purchase License
      </Button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="clients-modal-data">
          <div className="col-xl-12">
            <div className="input-group">
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={decNum}
                >
                  -
                </button>
              </div>
              <input
                type="text"
                className="form-control"
                value={num}
                onChange={handleChange}
              />
              <div className="input-group-prepend">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={incNum}
                >
                  +
                </button>
              </div>
            </div>
            <div className="text-center mt-4">
              {num >= 1
                ? "$39 per license per month"
                : "$0 per license per month"}
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default ClientsLi;
