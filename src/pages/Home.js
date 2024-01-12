import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Unstable_Grid2";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
        <Header />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Los Angeles, CA
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
          Full-stack engineer & digital marketing expert.
          <br /> You can find me @eburdekin in most places.
        </Typography>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
