import { useState } from "react";
import profileImg from "../assets/bhavani.jpeg";
import profileImg2 from "../assets/leisha.jpg";

const team = [
  {
    name: "Bhavani Murali",
    image: profileImg,
    imageSide: "left",
  },
  {
    name: "Leisha Suvarna",
    image: profileImg2,
    imageSide: "right",
  },
];

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-white rounded-xl shadow-lg p-4 pb-8 sm:px-10 flex flex-col items-center justify-center">
      <hr className="border-t-8 border-[#5f8d4e] mb-6 w-2/12 rounded-full" />
      <h2 className="text-3xl decoration-[#7a4c36] underline underline-offset-8 font-bold font-merriweather text-center text-[#5f8d4e] mb-12">
        Our Team
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative bg-[#fce4ec] p-2 rounded-2xl shadow-xl w-[200px] h-[80px] flex flex-col justify-center items-center group transition-all duration-300 hover:bg-[#d1efc6] hover:cursor-pointer"
          >
            {hoveredIndex === index && (
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 ${
                  member.imageSide === "left"
                    ? "-left-40"
                    : "-right-40"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 bg-gray-300 rounded-full border-4 border-white shadow-md object-cover transition duration-300"
                />
              </div>
            )}

            <h3 className="text-xl font-semibold font-lora text-[#3d5234]">
              {member.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
