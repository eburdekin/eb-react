import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Project({ name, summary }) {
  return (
    <Container>
      <Typography variant="h5">{name}</Typography>
      <Typography>{summary}</Typography>
    </Container>
  );
}
