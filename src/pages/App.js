import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";

function Home() {
  return (
    <Container maxWidth="md">
      <NavBar />
      <Header />
      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
        This text will be Figtree with a weight of 500.
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        You can find me at @eburdekin in most places.
      </Typography>
      <Typography variant="h1">This is a heading</Typography>
      <Typography variant="body1">This is body text</Typography>
      <Typography variant="button">This is a button label</Typography>
      <Footer />
    </Container>
  );
}

export default Home;
