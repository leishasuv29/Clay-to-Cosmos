import TeamSection from "../components/OurTeam";
import PageTransitionWrapper from "../components/PageTransitionWrapper";

export default function About() {
  return (
    <PageTransitionWrapper>
      <div className="relative w-full min-h-screen bg-white overflow-hidden">
        <div className="absolute w-full min-h-[100vh] max-h-screen bg-[#fce4ec] overflow-hidden flex flex-col items-center justify-evenly">
          <div className="-mt-12">
            <h1 className="text-3xl sm:text-5xl font-extrabold font-cormorant text-[#5f8d4e] mb-6 text-center">
              About Us
            </h1>
            <p className="text-base font-lora sm:text-lg text-[#3d5234] leading-relaxed max-w-3xl text-center mt-2">
              <strong>Clay to Cosmos</strong> brings together artisans,
              storytellers, and eco-devotees to celebrate Ganpati in all his
              divine beauty. Each murti is a journey from clay to cosmos 🌿✨.
            </p>
          </div>

          {/* Marquee */}

          {/* Team Section */}
          <div className="flex flex-col items-center justify-center">
            <TeamSection />
          </div>
        </div>
      </div>
    </PageTransitionWrapper>
  );
}
