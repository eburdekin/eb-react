import * as React from "react";

// import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function Project({
  name,
  blurb,
  fullSummary,
  libraries,
  screenshot,
}) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const boxStyle = {
    borderRadius: 5,
    border: "1px solid black",
    padding: "5px",
    // boxShadow: 3,
    textAlign: "center",
    height: "150px",
    paddingTop: "30px",
    boxShadow: isHovered ? 8 : 3,
    cursor: "pointer",
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000000",
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
    textAlign: "center",
  };

  const titleStyle = {
    // color: "#AD9BBF",
    fontWeight: "bold",
  };

  const languageStyle = {
    backgroundColor: "lightgrey",
    fontSize: "14px",
    borderRadius: "15px",
    paddingLeft: "8px",
    paddingRight: "8px",
    display: "inline-block", // Treat as an inline element that can have a width
    width: "fit-content",
    margin: "2px",
  };

  return (
    <Box
      sx={boxStyle}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typography variant="h6" sx={titleStyle}>
        {name}
      </Typography>
      <Typography>{blurb}</Typography>
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
          <Typography sx={{ fontWeight: "medium" }}>{blurb}</Typography>
          <img
            src={screenshot}
            alt="screenshot"
            width="450px"
            height="auto"
          ></img>
          {libraries &&
            libraries.map((language) => (
              <Typography key={language} sx={languageStyle}>
                {language}
              </Typography>
            ))}
          <Typography>{fullSummary}</Typography>
        </Box>
      </Modal>
    </Box>
  );
}
