import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import HeroAndGallery from "./components/ImageGrid";

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
      <Navbar />
      {!isLoading && (
        <div className="min-h-screen">
          <HeroAndGallery />
          Main Content
        </div>
      )}
    </>
  );
}

export default App;
