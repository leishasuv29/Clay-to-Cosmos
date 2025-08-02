import React, { useState, useRef, useEffect } from "react";
import bappaImage from "../assets/bappa.jpg";
import modakIcon from "../assets/modak.png";
import music from "../assets/music.mp3";
import ShowerEffect from "./ShowerEffect";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showShower, setShowShower] = useState(false);
  const dropdownRef = useRef(null);
  const audioRef = useRef(new Audio(music));

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = () => {
    setOpen(!open);
    setShowShower(true);
    setTimeout(() => setShowShower(false), 3000);

    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch((err) =>
        console.warn("Autoplay blocked:", err)
      );
    }
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 0px #f4d060; }
          50% { box-shadow: 0 0 15px #f4d060; }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }

        .animate-glow-border {
          animation: glow 3s infinite ease-in-out;
        }
      `}</style>

      <div className="relative z-50">
        <header className="flex justify-between items-center p-3 sm:p-5 bg-white shadow-lg font-serif relative">
          {/* Left – Menu Button */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleMenuClick}
              className={`bg-[#3d5234] text-white px-6 py-3 rounded-full text-lg sm:text-xl font-medium shadow-lg hover:bg-[#2c3f27] transition-all duration-300 flex items-center gap-1 ${
                open ? "rotate-3 scale-95" : ""
              }`}
            >
              <span
                className={`transition-all duration-300 ${
                  open ? "opacity-0 absolute" : "opacity-100"
                }`}
              >
                Menu
              </span>
              <img
                src={modakIcon}
                alt="Modak Icon"
                className={`w-8 h-8  transition-all duration-300 ${
                  open ? "opacity-0 absolute" : "opacity-100"
                }`}
              />
              <span
                className={`transition-all duration-300 ${
                  open ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                Close ✕
              </span>
            </button>

            {/* Slide-Out Panel */}
            <div
              className={`fixed top-0 left-0 w-[80vw] max-w-md h-full bg-[#fff9f4] shadow-2xl border-r-[6px] border-[#f4d060] transform transition-transform duration-500 ease-in-out flex flex-col justify-between z-40 ${
                open ? "translate-x-0" : "-translate-x-full"
              } animate-glow-border`}
            >
              <div className="text-center text-xl font-semibold text-[#5f3e2b] py-4 bg-[#fbeadf] tracking-wider border-b border-[#e8d9cc] animate-fade-in">
                |ॐ| गणपति बाप्पा मोरया |ॐ|
              </div>

              <div className="px-6 py-4">
                <div className="rounded-3xl overflow-hidden shadow-md border border-[#e0cdbb] hover:scale-[1.03] transition-transform duration-300">
                  <img
                    src={bappaImage}
                    alt="Ganpati Bappa"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>

              <nav className="px-6 pb-6 space-y-4">
                {[
                  ["Home", "/"],
                  ["Gallery", "#"],
                  ["Artisans – Blessed by Ganpati", "/artisans"],
                  ["About Us", "/about"],
                ].map(([label, link], i) => (
                  <Link
                    key={i}
                    to={link}
                    className="block px-6 py-3 rounded-xl text-white bg-[#3d5234] hover:bg-[#2c3f27] hover:scale-105 transition-all duration-300 text-center text-lg"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="text-center text-sm text-[#6b4b39] py-4 italic border-t border-[#e8d9cc] bg-[#fdf6f0]">
                <span className="block animate-pulse">|| Made with blessings ||</span>
                <span className="text-lg mt-1 inline-block animate-bounce">🪔</span>
              </div>
            </div>
          </div>

          {/* Right – Title */}
          <div className="text-[#3d5234] font-bold text-xl sm:text-3xl flex items-center gap-2 tracking-wide">
            <span className="animate-pulse">🌸</span>
            <span>|| Clay to Cosmos ||</span>
            <span className="animate-pulse">🌸</span>
          </div>
        </header>

        {/* Shower Effect */}
        {showShower && <ShowerEffect trigger={showShower} />}
      </div>
    </>
  );
}
