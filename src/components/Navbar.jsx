import React, { useState, useRef, useEffect } from "react";
import bappaImage from "../assets/bappa.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white p-4 sm:p-6 flex justify-between items-center font-serif shadow-md">
      <div className="text-[#3d5234] font-bold text-2xl sm:text-3xl ml-2 tracking-wide transition-all duration-300">
        Clay to Cosmos
      </div>

      <div className="relative inline-block text-left" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className={`bg-[#3d5234] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full text-lg sm:text-xl font-medium shadow hover:bg-[#2c3f27] active:scale-95 transition-transform duration-300 ease-in-out transform ${
            open ? "rotate-3" : "rotate-0"
          }`}
        >
          <span
            className={`block transition-opacity duration-200 ${
              open ? "opacity-0 absolute" : "opacity-100"
            }`}
          >
            Menu ☰
          </span>
          <span
            className={`block transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            Close ✕
          </span>
        </button>

        <div
          className={`absolute right-0 mt-4 w-80 rounded-3xl shadow-2xl backdrop-blur-xl bg-[#fdf6f0]/90 border-2 border-[#7a4c36] z-50 overflow-hidden transform transition-all duration-500 ease-in-out origin-top ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="text-center text-xl font-semibold text-[#5f3e2b] py-4 bg-[#f3e3d3] tracking-wider border-b border-[#e8d9cc] animate-fade-in">
            ॐ गणपति बाप्पा मोरया ॐ
          </div>

          {/* Curved Image */}
          <div className="px-6 py-4">
            <div className="rounded-3xl overflow-hidden shadow-md border border-[#e0cdbb] transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={bappaImage}
                alt="Ganpati Bappa"
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-5 pb-5 space-y-3">
            {[
              ["Home", "#"],
              ["About Us", "#"],
              ["Artisans – Blessed by Ganpati", "#"],
              ["Gallery", "#"],
              ["Contact", "#"],
            ].map(([label, link], i) => (
              <a
                key={i}
                href={link}
                className="block px-5 py-2.5 rounded-xl text-white bg-[#3d5234] hover:bg-[#2c3f27] hover:scale-105 transition-all duration-300 ease-in-out text-center font-medium shadow-sm tracking-wide"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="text-center text-sm text-[#6b4b39] py-4 italic border-t border-[#e8d9cc] bg-[#fdf6f0] tracking-wide">
            <span className="block opacity-90 animate-pulse">
              || Made with blessings ||
            </span>
            <span className="text-lg mt-1 inline-block animate-bounce">🪔</span>
          </div>
        </div>
      </div>
    </div>
  );
}
