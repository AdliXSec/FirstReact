import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/index";
import LoginPages from "./pages/login";
import RegistrasiPages from "./pages/registrasi.jsx";
import Pesan from "./pages/pesan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "/registrasi",
    element: <RegistrasiPages />,
  },
  {
    path: "/pesan",
    element: <Pesan />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
