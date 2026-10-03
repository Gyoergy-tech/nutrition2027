import HeroDivider from "./HeroDivider";

export default function ContactHero() {
  return (
    <section className="mt-16 bg-white">
      <div className="mx-auto max-w-[1536px] px-6 pt-14 lg:px-8 lg:pt-20">
        <div className="grid gap-8 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20 lg:pb-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0064a7]">
              Kontakt
            </p>

            <h1 className="mt-6 max-w-[650px] text-4xl font-semibold leading-[1.08] tracking-tight text-[#092750] lg:text-5xl">
              Fragen zur{" "}
              <span className="text-[#65a82f]">Nutrition 2027?</span>
            </h1>
          </div>

          <p className="max-w-[620px] text-lg leading-relaxed text-slate-600">
            Bei Fragen zum Kongress, zur Anmeldung oder zu
            Kooperationsmöglichkeiten finden Sie hier die passenden
            Ansprechpartner.
          </p>
        </div>

        <HeroDivider />
      </div>
    </section>
  );
}