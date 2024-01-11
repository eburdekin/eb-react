import * as React from "react";

// import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function Project({ name, summary }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  const boxStyle = {
    borderRadius: 5,
    border: "2px solid black",
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
  };

  return (
    <Box sx={boxStyle} onClick={handleClick}>
      <Typography variant="h6">{name}</Typography>
      <Typography>{summary}</Typography>
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6">
            {name}
          </Typography>
          <Typography>{summary}</Typography>
          <Typography>Addition context, links, etc.</Typography>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Eirik_Newth-A_sleeping_kitten-02.jpg"
            alt="screenshot"
            width="350px"
            height="225px"
          ></img>
        </Box>
      </Modal>
    </Box>
  );
}
