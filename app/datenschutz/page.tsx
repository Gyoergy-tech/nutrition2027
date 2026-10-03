import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DatenschutzHero from "@/components/DatenschutzHero";
import DatenschutzContent from "@/components/DatenschutzContent";

export default function DatenschutzPage() {
  return (
    <>
      <Header />

      <main>
        <DatenschutzHero />
        <DatenschutzContent />
      </main>

      <Footer />
    </>
  );
}