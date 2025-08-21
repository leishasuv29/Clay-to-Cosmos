import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
import RippleEffect from "./components/RippleEffect"; 

export default function App() {
  return (
    <Router>
      <RippleEffect /> 
      <Navbar />
      <MainRoutes />
    </Router>
  );
}
