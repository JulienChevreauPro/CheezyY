import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
