import React from "react";
import img1 from "../assets/marquee/img1.png";
import img2 from "../assets/marquee/img2.png";
import img3 from "../assets/marquee/img3.png";
import img4 from "../assets/marquee/img4.png";
import img5 from "../assets/marquee/img5.png";
import img6 from "../assets/marquee/img6.png";
import img7 from "../assets/marquee/img7.png";
import img8 from "../assets/marquee/img8.png";
import img9 from "../assets/marquee/img9.png";
import img10 from "../assets/marquee/img10.png";
import PageTransitionWrapper from "../components/PageTransitionWrapper";

export default function Artisans() {
  const artisans = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];
  console.log(artisans.length);

  return (
    <PageTransitionWrapper>
      <div className="bg-[#fce4ec] min-h-screen py-12 px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold underline underline-offset-8 decoration-2 decoration-[#7a4c36] text-center font-cormorant text-[#3d5234] mb-10 tracking-wide">
          Artisans – Blessed by Ganapati
        </h1>

        <div className="marquee-container">
          <div className="marquee">
            {artisans.concat(artisans).map((img, index) => (
              <div key={index} className="marquee-item">
                <img
                  src={`${img}?auto=format&fit=crop&w=200&h=200&q=80`}
                  alt={`Artisan ${index + 1}`}
                  className="rounded-full border-4 border-[#5f8d4e] shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center text-[#5f3e2b] text-2xl font-semibold font-dancingscript tracking-wide">
          🙏 Celebrating the hands that bring devotion to form. 🙏
        </p>

        {/* Custom styles */}
        <style>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          padding: 40px;
          position: relative;
        }

        .marquee {
          display: flex;
          gap: 3rem;
          width: max-content;
          animation: scroll-marquee 25s linear infinite;
        }

        .marquee-container:hover .marquee {
          animation-play-state: paused;
        }

        .marquee-item img {
          width: 160px;
          height: 160px;
          object-fit: cover;
        }

        @keyframes scroll-marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      </div>
    </PageTransitionWrapper>
  );
}
