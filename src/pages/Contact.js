import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavBar from "../components/NavBar";
// import Header from "../Header";
import Footer from "../components/Footer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <Container maxWidth="md">
      <NavBar />
      {/* <Header /> */}
      <Typography variant="h3" fontWeight="bold">
        Contact
      </Typography>
      <FormControl sx={{ width: 400 }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ margin: 1, width: "100%" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{ margin: 1, width: "100%" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Subject"
          variant="outlined"
          sx={{ margin: 1, width: "100%" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Message"
          variant="outlined"
          sx={{ margin: 1, width: "100%" }}
          multiline
          rows="6"
          required
        />
        <Button
          sx={{ margin: 1 }}
          // color="#027353"
          variant="contained"
          endIcon={<FontAwesomeIcon icon={faPaperPlane} />}
          disableElevation
        >
          Submit
        </Button>
      </FormControl>
      <Footer />
    </Container>
  );
}
