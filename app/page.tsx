import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroDivider from "@/components/HeroDivider";
import OrganizerSection from "@/components/OrganizerSection";
import IntroSection from "@/components/IntroSection";
import TopicsPreview from "@/components/TopicsPreview";
import ExploreSection from "@/components/ExploreSection";
import RegistrationCTA from "@/components/RegistrationCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroDivider />
        <OrganizerSection />
        <IntroSection />
        <TopicsPreview />
        <RegistrationCTA />
        <ExploreSection />
        
        <Footer />
      </main>
    </>
  );
}