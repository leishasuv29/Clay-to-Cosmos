import { useState, useEffect } from "react";
import GaneshSVG from "../assets/ganesh.png"; // if using file

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const steps = [10, 35, 54, 78, 92, 100];

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setProgress(steps[i]);
      i++;

      if (i === steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 800); // fade-out duration
        }, 1000); // wait 1s at 100%
      }
    }, 600); // time between steps

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-800 bg-[#fce4ec] backdrop-blur-sm ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Ganesha SVG */}
      <img
        src={GaneshSVG}
        alt="Ganesh Icon"
        className="w-40 h-40 mb-4 animate-bounce"
      />

      {/* Percentage */}
      <div className="text-[#7a4c36] text-xl font- mb-2 font-dancingscript">
        {progress}%
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-2 bg-[#fbb6ce] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#5f8d4e] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Message */}
      <p className="mt-4 text-[#5f8d4e] text-lg font-lora italic tracking-wider">
        Loading divine artistry...
      </p>
    </div>
  );
}
