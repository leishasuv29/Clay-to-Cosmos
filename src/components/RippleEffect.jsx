import { useEffect } from "react";

export default function RippleEffect() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "soft-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1200); // duration to match the animation
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
