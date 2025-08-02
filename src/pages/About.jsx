import TeamSection from "../components/OurTeam";
import PageTransitionWrapper from "../components/PageTransitionWrapper";
import ganpatiImage from "../assets/ganpati.png";

export default function About() {
  return (
    <PageTransitionWrapper>
      <div className="relative w-full min-h-screen bg-white overflow-hidden">
        <div className="absolute w-full min-h-[100vh] bg-[#fce4ec] overflow-y-auto flex flex-col items-center pt-0 pb-2">
          
          {/* Ganpati image at top with minimal spacing */}
          <div className="flex justify-center mb-1">
            <img
              src={ganpatiImage}
              alt="Ganpati"
              className="h-36 sm:h-44 md:h-52 object-contain"
            />
          </div>

          {/* About Text */}
          <div className="mb-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cormorant text-[#5f8d4e] mb-3 text-center">
              About Us
            </h1>
            <p className="text-base font-lora sm:text-lg text-[#3d5234] leading-relaxed max-w-3xl text-center mt-1">
              <strong>Clay to Cosmos</strong> brings together artisans,
              storytellers, and eco-devotees to celebrate Ganpati in all his
              divine beauty. Each murti is a journey from clay to cosmos 🌿✨.
            </p>
          </div>

          {/* Team Section */}
          <div className="flex flex-col items-center justify-center mt-2">
            <TeamSection />
          </div>
        </div>
      </div>
    </PageTransitionWrapper>
  );
}
