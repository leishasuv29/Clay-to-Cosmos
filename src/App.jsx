import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import HeroAndGallery from "./components/ImageGrid";
import RippleEffect from "./components/RippleEffect";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <Loader onFinish={() => setIsLoading(false)} />
  ) : (
    <>
      <RippleEffect /> {/* 👈 MUST be outside other content */}
      <Navbar />
      {!isLoading && (
        <div className="min-h-screen">
          <HeroAndGallery />
        </div>
      )}
    </>
  );
}

export default App;
