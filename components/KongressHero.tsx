import HeroDivider from "./HeroDivider";

export default function KongressHero() {
  return (
    <section className="mt-16 bg-white">
      <div className="mx-auto max-w-[1536px] px-6 pt-16 lg:px-8 lg:pt-24">
        <div className="grid gap-12 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24 lg:pb-20">
          
          {/* Überschrift */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0064a7]">
              Der Kongress
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#092750] lg:text-5xl">
              Drei Länder.
              <br />
              Drei Fachgesellschaften.
              <br />
              <span className="text-[#65a82f]">
                Ein gemeinsamer Kongress.
              </span>
            </h1>
          </div>

          {/* Intro */}
          <div className="max-w-[650px] lg:pb-1">
            <p className="text-lg leading-relaxed text-slate-600">
              Die AKE, DGEM und GESKES laden Fachpersonen aus Medizin,
              Diätologie, Pflege, Pharmazie, Wissenschaft und weiteren
              Gesundheitsberufen zum interprofessionellen Austausch nach
              Bregenz ein.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Die Nutrition 2027 verbindet aktuelle wissenschaftliche
              Erkenntnisse mit konkreten Fragen aus der klinischen Versorgung
              und schafft Raum für Diskussion, neue Perspektiven und
              persönlichen Austausch.
            </p>
          </div>
        </div>

        {/* Fakten */}
        <div className="border-t border-slate-200 py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0064a7]">
              25. Dreiländertagung
            </p>

            <span
              aria-hidden="true"
              className="hidden h-5 w-px bg-slate-300 md:block"
            />

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#092750]">
              03.–05. Juni 2027
            </p>

            <span
              aria-hidden="true"
              className="hidden h-5 w-px bg-slate-300 md:block"
            />

            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#092750]">
              Festspielhaus Bregenz
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