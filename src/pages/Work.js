import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import NavBar from "../NavBar";
// import Header from "../Header";
import Footer from "../Footer";

export default function Work() {
  return (
    <Container maxWidth="md">
      <NavBar />
      {/* <Header /> */}
      <Grid container spacing={2}>
        <Grid xs={2}>hi</Grid>
        <Grid xs={2}>hi</Grid>
        <Grid xs={2}>hi</Grid>
        <Grid xs={2}>hi</Grid>
        <Grid xs={2}>hi</Grid>
      </Grid>
      <Footer />
    </Container>
  );
}
