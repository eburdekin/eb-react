import Container from "@mui/material/Container";
import NavBar from "../NavBar";
// import Header from "../Header";
import Footer from "../Footer";

export default function Contact() {
  return (
    <Container maxWidth="md">
      <NavBar />
      {/* <Header /> */}
      <h1>Contact</h1>
      <p>Form will go here.</p>
      <Footer />
    </Container>
  );
}
