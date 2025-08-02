import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import HeroAndGallery from "../components/ImageGrid";
import RippleEffect from "../components/RippleEffect";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <RippleEffect />
      <HeroAndGallery />
    </>
  );
}
