import { useState, useEffect } from "react";
import { images } from "./utils/data";
import "./App.css";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
      {!isLoading && <div className="min-h-screen">Main Content</div>}
    </>
  );
  );
}

export default App;
export default App;
