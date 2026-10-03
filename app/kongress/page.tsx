import Header from "@/components/Header";
import KongressHero from "@/components/KongressHero";
import CongressPresidium from "@/components/CongressPresidium";
import CongressOrganizers from "@/components/CongressOrganizers";
import CongressOrganisation from "@/components/CongressOrganisation";
import RegistrationCTA from "@/components/RegistrationCTA";

import Footer from "@/components/Footer";

export default function KongressPage() {
  return (
    <>
      <Header />
      <main>
        <KongressHero />
        <CongressPresidium />
        <CongressOrganizers />
        <RegistrationCTA />
        <CongressOrganisation />
      </main>
      <Footer />
    </>
  );
}