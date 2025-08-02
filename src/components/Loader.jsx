import { useState, useEffect } from "react";
import GaneshImg from "../assets/ganesh.png"; 

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
          }, 800); 
        }, 1000); 
      }
    }, 600); 

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-800 bg-[#fce4ec] backdrop-blur-sm ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src={GaneshImg}
        alt="Ganesh Icon"
        className="w-40 h-40 m-0 animate-bounce"
      />

      <div className="flex flex-col gap-2 align-middle items-center justify-center m-10 px-6 py-2 rounded-full text-lg sm:text-xl font-dancingscript font-bold bg-gradient-to-r from-[#fbb6ce] via-yellow-200 to-[#fce4ec] text-[#7a4c36] shadow-md animate-pulse border-2 border-[#7a4c36]">
        <p>🌸 || शुभ गणेश चतुर्थी || 🌸</p>
       <p  className="lg:text-3xl sm:text-2xl">🪔 Happy Ganesh Chaturthi 🪔</p>
      </div>

      <div className="text-[#7a4c36] text-xl font- mb-2 font-dancingscript">
        {progress}%
      </div>

      <div className="w-64 h-2 bg-[#fbb6ce] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#5f8d4e] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-[#5f8d4e] text-lg font-lora italic tracking-wider">
        Loading divine artistry...
      </p>
    </div>
  );
}
