import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { images } from "../utils/data";
import ganeshBG from "../assets/ganapati-bg-1.png";
import noise from '../assets/noise.jpg'

export default function HeroAndGallery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-cormorant relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] w-full bg-[#fce4ec] flex items-center justify-center px-6 sm:px-16 py-12 rounded-3xl shadow-lg overflow-hidden relative z-10">
        {/* Background Noise only for Hero */}
        <div className="absolute inset-0 z-0">
          <div className={`w-full h-full bg-[${noise}] opacity-20 mix-blend-multiply`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto relative z-10">
          {/* Text content */}
          <div data-aos="fade-right">
            <h1 className="font-merriweather text-4xl sm:text-5xl font-extrabold text-[#7a4c36] leading-tight mb-6">
              From Clay to Cosmos,
              <br />
              Discover Divine Elegance
            </h1>
            <p className="font-lora text-lg text-[#5f8d4e] mb-8 max-w-md">
              Explore handcrafted Ganesh Murti designs that honor tradition and
              eco-consciousness. A blend of devotion, art, and sustainability.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-[#7a4c36] text-white font-medium shadow hover:bg-[#5f8d4e] transition">
                Explore Now
              </button>
              <button className="px-6 py-3 rounded-full border border-[#7a4c36] text-[#7a4c36] font-medium hover:bg-[#fbb6ce] transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div data-aos="fade-left">
            <img
              src={ganeshBG}
              alt="Ganesh Idol"
              className="w-full max-w-lg mx-auto object-contain rounded-3xl shadow-xl hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="bg-white py-16 px-6 sm:px-10 relative z-10"
      >
        <h2
          className="text-center text-3xl sm:text-5xl font-semibold text-[#5f8d4e] mb-12"
          data-aos="fade-up"
        >
          Ganesh Murti Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-500"
              data-aos="zoom-in-up"
              data-aos-delay={`${i * 100}`}
            >
              <img
                src={img}
                alt={`Murti ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
