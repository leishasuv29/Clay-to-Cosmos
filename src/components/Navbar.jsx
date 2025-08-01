import { useState } from "react";
import { Menu, X } from "lucide-react";
import titleImage from "../assets/title.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Artisans", href: "#artisans" },
    { label: "Blessed by Ganpati", href: "#blessed" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#fce4ec] shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Desktop Nav Left & Right Links */}
        <div className="hidden md:flex flex-1 justify-between items-center">
          {/* Left Links */}
          <ul className="flex space-x-8 text-[#5f8d4e] font-semibold tracking-wide text-[16px]">
            {links.slice(0, 3).map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="transition duration-300 hover:text-[#7a4c36] hover:underline underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Links */}
          <ul className="flex space-x-8 text-[#5f8d4e] font-semibold tracking-wide text-[16px]">
            {links.slice(3).map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="transition duration-300 hover:text-[#7a4c36] hover:underline underline-offset-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Logo (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <img
            src={titleImage}
            alt="Clay to Cosmos"
            className="h-1/9 w-1/9 object-cover rounded-xl border-2 border-[#7a4c36] shadow-sm"
          />
        </div>

        {/* Mobile Logo + Menu Toggle */}
        <div className="md:hidden flex justify-between w-full items-center">
          <img
            src={titleImage}
            alt="Clay to Cosmos"
            className="h-1/9 w-1/9 object-cover rounded-xl border-2 border-[#7a4c36] shadow-sm"
          />
          <button onClick={() => setOpen(!open)} className="text-[#7a4c36] p-2">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-[#fce4ec] px-6 py-4 rounded-b-lg shadow-inner">
          <ul className="flex flex-col items-center space-y-3 text-[#5f8d4e] font-medium text-[15px]">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-[#7a4c36] transition duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
