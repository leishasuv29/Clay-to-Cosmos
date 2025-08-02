import TeamSection from "../components/OurTeam";
import PageTransitionWrapper from "../components/PageTransitionWrapper";
import ganpatiImage from "../assets/ganpati.png";

export default function About() {
  return (
    <PageTransitionWrapper>
      <div className="relative w-full min-h-screen bg-white">
        {/* Main Background Container */}
        <div className="absolute inset-0 bg-[#fce4ec] flex flex-col items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-10 overflow-y-auto">
          
          {/* Ganpati Image */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <img
              src={ganpatiImage}
              alt="Ganpati"
              className="h-32 sm:h-40 md:h-48 object-contain"
            />
          </div>

          {/* Heading and Description */}
          <div className="text-center max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-cormorant text-[#5f8d4e] mb-3">
              About Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#3d5234] font-lora leading-relaxed">
              <strong>Clay to Cosmos</strong> brings together artisans,
              storytellers, and eco-devotees to celebrate Ganpati in all his
              divine beauty. Each murti is a journey from clay to cosmos 🌿✨.
            </p>
          </div>

          {/* Team Section */}
          <div className="w-full mt-6 sm:mt-10">
            <TeamSection />
          </div>
        </div>
      </div>
    </PageTransitionWrapper>
  );
}
