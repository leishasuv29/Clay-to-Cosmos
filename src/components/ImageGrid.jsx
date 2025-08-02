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
                  <span className="typewriter text-[#16610E] mx-2 pl-2 bg-yellow-400 italic font-poppins font-bold">
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
              <button className="px-6 py-3 rounded-full bg-[#7a4c36] cursor-pointer text-white text-base font-medium shadow hover:bg-[#5f8d4e] transition">
                Explore Now
              </button>
              <button className="px-6 py-3 rounded-full border border-[#7a4c36] cursor-pointer text-[#7a4c36] text-base font-medium hover:bg-[#fbb6ce] transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
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
          className="text-center font-merriweather text-[clamp(2rem,3vw,3rem)] font-extrabold text-[#16610E] mb-4 leading-snug"
          data-aos="fade-up"
        >
          Ganesh Murti Showcase
        </h2>
        <p className="text-center text-[#7a4c36] font-medium mb-10">
          Tap on each murti for a hidden gem ✨
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="gallery">
          {images.map((img, i) => (
  <div
    key={i}
    className="relative group w-full aspect-square overflow-hidden rounded-xl shadow-xl"
    data-aos="zoom-in-up"
    data-aos-delay={`${i * 100}`}
  >
    <img
      src={img.url}
      alt={`Murti ${i + 1}`}
      className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-in-out transform group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(122,76,54,0.4)]"
    />

    {/* Ripple Effect */}
    <span className="absolute inset-0 before:absolute before:inset-0 before:rounded-full before:opacity-0 before:scale-75 group-hover:before:scale-110 group-hover:before:opacity-40 before:transition-all before:duration-700 before:ease-out before:bg-white pointer-events-none"></span>

    {/* Price Tag */}
  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
  <div className="bg-white text-[#145A00] text-3xl font-black tracking-tight px-6 py-3 rounded-full shadow-2xl backdrop-blur-sm border-2 border-[#145A00]/50">
    {img.price}
  </div>
</div>




    {/* Overlay to trigger story */}
    <div
      className="absolute inset-0 bg-gradient-to-t from-[#fce4ec]/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 cursor-pointer"
      onClick={() => openStoryModal(i % 5)}
    ></div>
  </div>
))}

        </div>
      </section>

      {/* Modal */}
      {activeStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="fixed inset-0 bg-[#fce4ec] opacity-90"
            onClick={closeStoryModal}
          ></div>
          <div className="bg-white border border-[#7a4c36] rounded-xl max-w-md w-full p-6 shadow-lg relative animate-fade-in z-10">
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
      )}
    </div>
  );
}
