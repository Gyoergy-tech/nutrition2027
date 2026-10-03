import Header from "@/components/Header";
import BregenzHero from "@/components/BregenzHero";
import Footer from "@/components/Footer";
import BregenzInfo from "@/components/BregenzInfo";

export default function BregenzPage() {
  return (
    <>
      <Header />

      <main>
        <BregenzHero />
        <BregenzInfo />
      </main>

      <Footer />
    </>
  );
}