import HeroDivider from "./HeroDivider";

export default function ProgramHero() {
  return (
    <section className="mt-16 bg-white">
      <div className="mx-auto max-w-[1536px] px-6 pt-12 lg:px-8 lg:pt-16">

        <div className="grid gap-8 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:pb-12">

          {/* Titel */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0064a7]">
              Programm & Themen
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-[#092750] lg:text-5xl">
              Was die Ernährungsmedizin{" "}
              <span className="text-[#65a82f]">
                2027 bewegt.
              </span>
            </h1>
          </div>

          {/* Intro */}
          <div className="max-w-[650px]">
            <p className="text-lg leading-relaxed text-slate-600">
              Die Nutrition 2027 verbindet aktuelle Forschung mit konkreten
              Fragen aus der klinischen Versorgung. Wissenschaftliche Updates,
              Kontroversen und praxisnahe Formate schaffen Raum für neue
              Erkenntnisse und den interprofessionellen Austausch.
            </p>
          </div>

        </div>

        {/* Fakten */}
        <div className="border-t border-slate-200 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0064a7]">
              03.–05. Juni 2027
            </p>

            <span
              aria-hidden="true"
              className="hidden h-5 w-px bg-slate-300 md:block"
            />

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#092750]">
              Festspielhaus Bregenz
            </p>

            <span
              aria-hidden="true"
              className="hidden h-5 w-px bg-slate-300 md:block"
            />

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#092750]">
              Wissenschaft · Praxis · Austausch
            </p>

          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1536px] px-6 lg:px-8">
        <HeroDivider />
      </div>
    </section>
  );
}