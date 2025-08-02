import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

export default function App() {
  return (
    <Router>
      <Navbar />
      <MainRoutes />
    </Router>
  );
}
