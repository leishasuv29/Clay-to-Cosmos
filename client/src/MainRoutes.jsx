import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import RegisterLogin from "./pages/RegisterLogin";
import CustomOrder from "./pages/CustomOrder";
// import ArtisanDashboard from "./pages/ArtisanDashboard"; // example
import ProtectedRoute from "./components/ProtectedRoute";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/user" element={<RegisterLogin />} />

      {/* Customer protected route */}
      <Route
        path="/custom-order"
        element={
          <ProtectedRoute role="customer">
            <CustomOrder />
          </ProtectedRoute>
        }
      />

      {/* Artisan protected route */}
      {/* <Route
        path="/artisan-dashboard"
        element={
          <ProtectedRoute role="artisan">
            <ArtisanDashboard />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}
