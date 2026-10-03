import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";

export default function KontaktPage() {
  return (
    <>
      <Header />

      <main>
        <ContactHero />
        <ContactInfo />
      </main>

      <Footer />
    </>
  );
}