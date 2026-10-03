import Header from "@/components/Header";
import ProgramHero from "@/components/ProgramHero";
import Footer from "@/components/Footer";
import ScientificProgram from "@/components/ScientificProgram";
import AbstractSubmission from "@/components/AbstractSubmission";
import RegistrationCTA from "@/components/RegistrationCTA";

export default function KongressPage() {
  return (
    <>
      <Header />
      <main>
        <ProgramHero />
        <ScientificProgram />
        <RegistrationCTA />
        <AbstractSubmission />
       
      </main>
      <Footer />
    </>
  );
}