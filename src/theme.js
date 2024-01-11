import { createTheme } from "@mui/material/styles";

import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";
import "@fontsource/figtree/700.css";
import "@fontsource/figtree/800.css";
import "@fontsource/figtree/900.css";

const theme = createTheme({
  typography: {
    fontFamily: "Figtree",
    weightRegular: 400,
    weightMedium: 500,
    weightSemiBold: 600,
    weightBold: 700,
    weightExtraBold: 800,
    weightBlack: 900,
  },
  palette: {
    teal: "#027353",
  },
});

export default theme;
