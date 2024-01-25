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
      name: "Send It!",
      blurb: "blurb",
      fullSummary: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      libraries: ["Flask", "React"],
      screenshot:
        "https://camo.githubusercontent.com/0620ca6ca203f225c0a3c1d2f526848ed9ac5d80299bca49715865e656ab101c/68747470733a2f2f692e6962622e636f2f5352527756524a2f486f6d65706167652e706e67",
    },
    {
      name: "Karaoke Machine",
      blurb: "blurb",
      fullSummary: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      libraries: ["Python", "rich"],
      screenshot:
        "https://github.com/eburdekin/karaoke-machine/raw/main/lib/img/menu.png",
    },
    {
      name: "flatTable",
      blurb: "blurb",
      fullSummary: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      libraries: ["React"],
      screenshot:
        "https://github.com/eburdekin/flattable/raw/main/public/images/login.png",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ width: "100%", textAlign: "center" }}>
      <NavBar />
      {/* <Header /> */}
      <Typography variant="h4" fontWeight="bold">
        Work
      </Typography>
      <Typography>Click on a project to see more.</Typography>
      <Grid container spacing={2} marginTop="20px">
        {projects.map((project) => (
          <Grid xs={4} key={project.name}>
            <Project
              name={project.name}
              blurb={project.blurb}
              fullSummary={project.fullSummary}
              libraries={project.libraries}
              screenshot={project.screenshot}
            />
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
