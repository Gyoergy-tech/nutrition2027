import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImpressumHero from "@/components/ImpressumHero";
import ImpressumContent from "@/components/ImpressumContent";

export default function ImpressumPage() {
  return (
    <>
      <Header />

      <main>
        <ImpressumHero />
        <ImpressumContent />
      </main>

      <Footer />
    </>
  );
}