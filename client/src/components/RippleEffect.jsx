import { useEffect } from "react";

export default function RippleEffect() {
  useEffect(() => {
    const gallery = document.getElementById("gallery");
    if (!gallery) return;

    const handleMouseMove = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "soft-ripple";

      const rect = gallery.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      gallery.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1200);
    };

    gallery.addEventListener("mousemove", handleMouseMove);
    return () => {
      gallery.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
