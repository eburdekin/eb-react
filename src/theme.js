import { createTheme } from "@mui/material/styles";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
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
