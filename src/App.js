import Typography from "@mui/material/Typography";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Typography variant="body1" sx={{ fontWeight: "medium" }}>
        This text will be Figtree with a weight of 500.
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        This text will be Figtree with a weight of 700.
      </Typography>
      <Typography variant="h1">This is a heading</Typography>
      <Typography variant="body1">This is body text</Typography>
      <Typography variant="button">This is a button label</Typography>
    </div>
  );
}

export default App;
