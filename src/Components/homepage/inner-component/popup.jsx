import * as React from "react";
import Box from "@mui/material/Box";
import "../../../Assets/css/popup2.css";

import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const BasicModal = ({ handleClose, open, handleOpen, title, discription,img }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class="carousel-item active">
            <div className="jury-card-2">
              <div>
                <img src={img} className="model-img" alt="not found" />
              </div>
              <div>
                <span>{title}</span>
                <p>{discription}</p>
                <div className="read-more" onClick={handleClose}>
                  Read Less
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
