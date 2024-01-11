import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import NavBar from "../components/NavBar";
// import Header from "../Header";
import Project from "../components/Project";
import Footer from "../components/Footer";

export default function Work() {
  const projects = [
    {
      name: "project1",
      summary: "summary1",
    },
    {
      name: "project2",
      summary: "summary2",
    },
    {
      name: "project3",
      summary: "summary3",
    },
    {
      name: "project4",
      summary: "summary4",
    },
  ];

  return (
    <Container maxWidth="md">
      <NavBar />
      {/* <Header /> */}
      <Typography variant="h3">Work</Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid xs={2} key={project.name}>
            <Project name={project.name} summary={project.summary} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Container>
  );
}

/* <Typography variant="h5">Full Resume</Typography>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQjYm5oH0qLPY1c97PIUKd1Xxq7LpZeQGLWJY_fi9FKSSWUS9gMtuUeDKpzjtAbOKhWVoAYBGFXeRKf/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        width="776"
        height="1040"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        title="resume"
      ></iframe> */
