import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavBar from "../NavBar";
// import Header from "../Header";
import Footer from "../Footer";

export default function Contact() {
  return (
    <Container maxWidth="md">
      <NavBar />
      {/* <Header /> */}
      <Typography variant="h3">Contact</Typography>
      <p>Form will go here.</p>
      <Footer />
    </Container>
  );
}
