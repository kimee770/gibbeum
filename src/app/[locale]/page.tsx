import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import KangRepairSection from "@/components/sections/KangRepairSection";
import MeshPainSection from "@/components/sections/MeshPainSection";
import TrustedSection from "@/components/sections/TrustedSection";
import JourneySection from "@/components/sections/JourneySection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <KangRepairSection />
        <MeshPainSection />
        <TrustedSection />
        <JourneySection />
      </main>
      <Footer />
    </>
  );
}
