import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Work from "./pages/Work";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // { path: "/work", element: <Work /> },
  // { path: "/contact", element: <Contact /> },
]);
