import React, { useEffect } from "react";
import modak from "../assets/modak.png";
import flower from "../assets/flower-pink.png";

export default function ShowerEffect({ trigger }) {
  useEffect(() => {
    if (!trigger) return;

    const createFallingElement = (src) => {
      const el = document.createElement("img");
      el.src = src;
      el.className = "falling-item";
      el.style.position = "fixed";
      el.style.top = "-60px";
      el.style.left = `${Math.random() * 100}vw`;
      el.style.width = "40px";
      el.style.height = "40px";
      el.style.zIndex = 9999;
      el.style.pointerEvents = "none";
      el.style.animation = `fall ${3 + Math.random() * 2}s linear`;

      document.body.appendChild(el);

      setTimeout(() => {
        el.remove();
      }, 5000);
    };

    const interval = setInterval(() => {
      const imgSrc = Math.random() > 0.5 ? modak : flower;
      createFallingElement(imgSrc);
    }, 150);

    setTimeout(() => clearInterval(interval), 3000);

    return () => clearInterval(interval);
  }, [trigger]);

  return null;
}
