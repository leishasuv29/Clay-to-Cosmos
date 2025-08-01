import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { images, stories } from "../utils/data";
import ganeshBG from "../assets/ganapati-bg-1.png";
import noise from "../assets/noise.jpg";

export default function HeroAndGallery() {
  const [activeStory, setActiveStory] = useState(null);

  function openStoryModal(index) {
    setActiveStory(stories[index]);
  }

  function closeStoryModal() {
    setActiveStory(null);
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-cormorant relative">
      {/* Hero Section */}
      <section className="min-h-[90vh] w-full bg-[#fce4ec] flex items-center justify-center px-6 sm:px-16 py-12 rounded-3xl shadow-lg overflow-hidden relative z-10">
        {/* Background Noise only for Hero */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full opacity-20 mix-blend-multiply"
            style={{
              backgroundImage: `url(${noise})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-[1300px] mx-auto relative z-10">
          {/* Text content */}
          <div data-aos="fade-right">
            <div className="flex flex-row m-0 p-0 h-16">
              <h1 className="font-merriweather text-4xl sm:text-5xl font-extrabold text-[#7a4c36] leading-tight mb-6">
                From{" "}
                <div className="inline-block m-auto align-middle">
                  <span className="typewriter text-[#16610E] mx-2 bg-yellow-400 italic font-poppins font-bold">
                    Clay to Cosmos
                  </span>
                </div>
              </h1>
            </div>
            <h1 className="font-merriweather text-4xl sm:text-5xl font-extrabold text-[#7a4c36] leading-tight mb-6">
              Discover Divine Elegance
            </h1>

            <p className="font-lora text-lg text-[#3d5234] mb-8 max-w-md">
              Explore handcrafted Ganesh Murti designs that honor tradition and
              eco-consciousness. A blend of devotion, art, and sustainability.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-[#7a4c36] text-white text-base font-medium shadow hover:bg-[#5f8d4e] transition">
                Explore Now
              </button>
              <button className="px-6 py-3 rounded-full border border-[#7a4c36] text-[#7a4c36] text-base font-medium hover:bg-[#fbb6ce] transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div data-aos="fade-left">
            <img
              src={ganeshBG}
              alt="Ganesh Idol"
              className="w-full max-w-lg mx-auto object-contain rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
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
          className="text-center font-merriweather text-[clamp(2rem,3vw,3rem)] font-extrabold text-[#16610E] mb-12 leading-snug"
          data-aos="fade-up"
        >
          Ganesh Murti Showcase
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative group [perspective:1000px] w-full aspect-square"
              data-aos="zoom-in-up"
              data-aos-delay={`${i * 100}`}
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front: Image */}
                <div className="absolute w-full h-full rounded-2xl shadow-lg bg-white overflow-hidden [backface-visibility:hidden]">
                  <img
                    src={img}
                    alt={`Murti ${i + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Back: Icon */}
                <div
                  className="absolute w-full h-full rounded-2xl shadow-lg bg-gray-200 flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] cursor-pointer"
                  onClick={() => openStoryModal(i % 5)} // handler
                >
                  <img
                    src={stories[i % 5].icon}
                    alt="Mushak Icon"
                    className="w-16 h-16"
                  />
                  <p>{stories[i % 5].title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {activeStory && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="fixed inset-0 bg-[#fce4ec] opacity-90 flex items-center justify-center px-4"
              onClick={closeStoryModal}
            ></div>
            <div className="bg-white border border-[#7a4c36] rounded-xl max-w-md w-full p-6 shadow-lg relative animate-fade-in">
              <button
                onClick={closeStoryModal}
                className="absolute right-3 top-3 bg-[#7a4c36] px-2 py-1 rounded-full text-gray-300 hover:text-white cursor-pointer"
              >
                ✕
              </button>
              <div className="flex flex-col items-center text-center space-y-4">
                <img src={activeStory.icon} alt="Icon" className="w-16 h-16" />
                <h3 className="text-xl font-merriweather italic font-semibold text-[#7a4c36]">
                  {activeStory.title}
                </h3>
                <p className="text-gray-700 font-lora">{activeStory.content}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
