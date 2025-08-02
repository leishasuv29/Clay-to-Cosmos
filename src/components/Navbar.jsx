import React, { useState, useRef, useEffect } from "react";
import bappaImage from "../assets/bappa.jpg";
import logo from "../assets/logo.png";
import music from "../assets/music.mp3";
import ShowerEffect from "./ShowerEffect";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showShower, setShowShower] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setVisible(false); // scroll down = hide
      } else {
        setVisible(true); // scroll up = show
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setOpen(!open);
    setShowShower(true);
    setTimeout(() => setShowShower(false), 3000);

    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.volume = 0.4;
      audioRef.current
        .play()
        .catch((err) => console.warn("Autoplay blocked:", err));
    }
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        @keyframes aura {
          0%, 100% {
            box-shadow: 0 0 12px #ffd70080, 0 0 24px #fff4c280;
          }
          50% {
            box-shadow: 0 0 20px #ffd700aa, 0 0 40px #fff4c2aa;
          }
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px #f4d060, 0 0 30px #f4d060; }
          50% { box-shadow: 0 0 35px #f4d060, 0 0 70px #f4d060; }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }

        .animate-glow-border {
          animation: glow 2.5s infinite ease-in-out;
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        .hover-aura:hover {
          animation: aura 2s infinite;
        }

        .fade-out {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
      `}</style>

      {/* Floating Logo with aura and scroll visibility */}
      <div
        className={`fixed -top-6 left-4 z-50 ${
          visible ? "fade-in" : "fade-out"
        }`}
      >
        <Link to="/">
          <img
            src={logo}
            alt="Clay to Cosmos Logo"
            className="w-40 h-40 object-contain rounded-full transition-transform duration-300 floating hover:scale-105 hover-aura"
          />
        </Link>
      </div>

      {/* Menu Button with same scroll visibility */}
      <div
        className={`absolute w-full flex justify-end z-30 ${
          visible ? "fade-in" : "fade-out"
        }`}
      >
        <header className="justify-end items-end p-3 sm:p-5 bg-transparent font-serif relative">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleMenuClick}
              className={`bg-[#3d5234] text-white px-6 py-3 rounded-full text-lg sm:text-xl font-medium shadow-lg hover:bg-[#2c3f27] transition-all duration-300 flex items-center gap-3 ${
                open ? "rotate-3 scale-95" : ""
              }`}
            >
              <span
                className={`transition-all duration-300 ${
                  open ? "opacity-0 absolute" : "opacity-100"
                }`}
              >
                Menu ☰
              </span>
              <span
                className={`transition-all duration-300 ${
                  open ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                Close ✕
              </span>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`fixed top-0 left-0 w-[80vw] max-w-md h-full bg-[#fff9f4] shadow-2xl border-r-[6px] border-[#f4d060] transform transition-transform duration-500 ease-in-out flex flex-col justify-between z-20 ${
                open ? "translate-x-0 animate-glow-border" : "-translate-x-full"
              }`}
            >
              <div className="text-center text-xl font-semibold text-[#5f3e2b] py-4 bg-[#fbeadf] tracking-wider border-b border-[#e8d9cc] animate-fade-in">
                |ॐ| गणपति बाप्पा मोरया |ॐ|
              </div>

              <div className="px-6 py-4">
                <div className="rounded-3xl overflow-hidden shadow-md border border-[#e0cdbb] hover:scale-[1.03] transition-transform duration-300">
                  <img
                    src={bappaImage}
                    alt="Ganapati Bappa"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>

              <nav className="px-6 pb-6 space-y-4">
                {[
                  ["Home", "/"],
                  ["Gallery", "/gallery"],
                  ["Artisans – Blessed by Ganapati", "/artisans"],
                  ["About Us", "/about"],
                ].map(([label, link], i) => (
                  <Link
                    key={i}
                    to={link}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 rounded-xl text-white bg-[#3d5234] hover:bg-[#2c3f27] hover:scale-105 transition-all duration-300 text-center text-lg"
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="text-center text-sm text-[#6b4b39] py-4 italic border-t border-[#e8d9cc] bg-[#fdf6f0]">
                <span className="block animate-pulse">
                  || Made with blessings ||
                </span>
                <span className="text-lg mt-1 inline-block animate-bounce">
                  🪔
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Modak Shower Effect */}
      {showShower && <ShowerEffect trigger={showShower} />}
    </>
  );
}
