import * as React from "react";

// import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function Project({ name, summary, fullSummary, libraries }) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  const boxStyle = {
    borderRadius: 5,
    border: "2px solid black",
    padding: "5px",
    textAlign: "center",
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
    borderRadius: 5,
    p: 4,
    textAlign: "center",
  };

  const titleStyle = {
    color: "#BF93B8",
    fontWeight: "bold",
  };

  const languageStyle = {
    backgroundColor: "lightgrey",
    fontSize: "12px",
    borderRadius: "10px",
    padding: "5px",
    display: "inline-block", // Treat as an inline element that can have a width
    width: "fit-content",
    margin: "2px",
  };

  return (
    <Box sx={boxStyle} onClick={handleClick}>
      <Typography variant="h6" sx={titleStyle}>
        {name}
      </Typography>
      <Typography>{summary}</Typography>
      {libraries &&
        libraries.map((language) => (
          <Typography key={language} sx={languageStyle}>
            {language}
          </Typography>
        ))}
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h4" sx={titleStyle}>
            {name}
          </Typography>
          <Typography sx={{ fontWeight: "medium" }}>{summary}</Typography>
          {libraries &&
            libraries.map((language) => (
              <Typography key={language} sx={languageStyle}>
                {language}
              </Typography>
            ))}
          <Typography>{fullSummary}</Typography>
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
