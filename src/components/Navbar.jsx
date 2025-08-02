import React, { useState, useRef, useEffect } from "react";
import bappaImage from "../assets/bappa.jpg";
import ShowerEffect from "./ShowerEffect";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showShower, setShowShower] = useState(false);
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

  useEffect(() => {
    const audio = new Audio("/bappa-chant.mp3"); // Place this file inside public folder
    if (showShower) {
      audio.play();
    }
    return () => audio.pause();
  }, [showShower]);

  const handleMenuClick = () => {
    setOpen(!open);
    setShowShower(true);
    setTimeout(() => setShowShower(false), 3000);
  };

  return (
    <div className="overflow-hidden bg-white p-2 sm:p-4 flex justify-between items-center font-serif shadow-md relative">
      {/* Left side – Menu */}
      <div className="relative inline-block text-left ml-2" ref={dropdownRef}>
        <button
          onClick={handleMenuClick}
          className={`bg-[#3d5234] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full text-lg sm:text-xl font-medium shadow hover:bg-[#2c3f27] active:scale-95 transition-transform duration-300 ease-in-out transform ${
            open ? "rotate-3" : "rotate-0"
          }`}
        >
          <span
            className={`flex justify-between w-20 cursor-pointer transition-opacity duration-200 ${
              open ? "opacity-0 absolute" : "opacity-100"
            }`}
          >
            <p>Menu</p> <p>☰</p>
          </span>
          <span
            className={`flex justify-between w-20 transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <p>Close</p> <p>✕</p>
          </span>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute left-0 mt-4 w-[24rem] rounded-3xl shadow-2xl backdrop-blur-xl bg-[#fdf6f0]/90 border-[3px] border-yellow-500 z-50 overflow-hidden transform transition-all duration-500 ease-in-out origin-top ${
            open
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
          } animate-glow-border`}
        >
          <div className="text-center text-xl font-semibold text-[#5f3e2b] py-4 bg-[#f3e3d3] tracking-wider border-b border-[#e8d9cc] animate-fade-in">
            |ॐ| गणपति बाप्पा मोरया |ॐ|
          </div>

          <div className="px-6 py-4">
            <div className="rounded-3xl overflow-hidden shadow-md border border-[#e0cdbb] transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={bappaImage}
                alt="Ganpati Bappa"
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>

          <nav className="px-6 pb-6 space-y-4">
            {[
              ["Home", "/"],
              ["Gallery", "#"],
              ["Artisans – Blessed by Ganpati", "#"],
              ["About Us", "/about"],
            ].map(([label, link], i) => (
              <Link
                key={i}
                to={link}
                className="block px-6 py-3 rounded-xl text-white bg-[#3d5234] hover:bg-[#2c3f27] hover:scale-105 transition-all duration-300 ease-in-out text-center font-medium shadow-sm tracking-wide text-lg sm:text-xl"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="text-center text-sm text-[#6b4b39] py-4 italic border-t border-[#e8d9cc] bg-[#fdf6f0] tracking-wide">
            <span className="block opacity-90 animate-pulse">|| Made with blessings ||</span>
            <span className="text-lg mt-1 inline-block animate-bounce">🪔</span>
          </div>
        </div>
      </div>

      {/* Right side – Logo/Title */}
      <div className="text-[#3d5234] font-bold text-xl sm:text-3xl mr-2 tracking-wide transition-all duration-300 text-right flex items-center gap-2">
        <span className="text-xl animate-pulse">🌸</span>
        <span>|| Clay to Cosmos ||</span>
        <span className="text-xl animate-pulse">🌸</span>
      </div>

      {/* Shower Effect */}
      {showShower && <ShowerEffect trigger={showShower} />}
    </div>
  );
}
