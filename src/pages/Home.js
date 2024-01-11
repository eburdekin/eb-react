import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
      <NavBar />
      <Header />
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Los Angeles, CA
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
        Full-stack engineer & digital marketing expert.
        <br /> You can find me @eburdekin in most places.
      </Typography>
      <Footer />
    </Container>
  );
}

export default Home;
