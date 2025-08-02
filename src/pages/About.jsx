import { useEffect, useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-in-out transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } px-10 py-16 min-h-[80vh]`}
    >
      <h1 className="text-4xl font-bold text-[#5f8d4e] mb-4">
        About Us
      </h1>
      <p className="text-lg text-[#3d5234] leading-relaxed max-w-2xl">
        MuseGrid celebrates the divine journey of Lord Ganesh, through eco-friendly clay art...
      </p>
    </div>
  );
}
