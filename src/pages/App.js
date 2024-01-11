import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <Container maxWidth="md">
      <NavBar />
      <Header />
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Los Angeles, CA
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
        You can find me at @eburdekin in most places.
      </Typography>

      <Typography variant="button">This is a button label</Typography>
      <Footer />
    </Container>
  );
}

export default Home;
