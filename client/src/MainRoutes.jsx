import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Artisans from "./pages/Artisans";
import Gallery from "./pages/Gallery";
import RegisterLogin from "./pages/RegisterLogin";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<RegisterLogin />} />
      <Route path="/artisans" element={<Artisans />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}
