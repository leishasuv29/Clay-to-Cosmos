import { useEffect, useState } from "react";
import "../index.css"; // make sure it imports ripple CSS

export default function RippleEffect() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 1200); // match animation duration
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="custom-ripple"
          style={{
            top: ripple.y + "px",
            left: ripple.x + "px",
          }}
        ></span>
      ))}
    </>
  );
}
