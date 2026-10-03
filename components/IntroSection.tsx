export default function IntroSection() {
  return (
    <section
      id="kongress"
      className="relative overflow-hidden bg-white"
    >
      {/* dezente grafische Elemente */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-28 top-8
          h-64 w-64 rounded-full
          border border-[#0064a7]/5
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-32 bottom-0
          h-80 w-80 rounded-full
          border border-[#65a82f]/5
        "
      />

      <div className="relative mx-auto max-w-[1536px] px-6 pb-20 pt-4 lg:px-8 lg:pb-24 lg:pt-4">
        <div className="mx-auto max-w-[920px] text-center">

          <h2 className="text-3xl font-semibold tracking-tight text-[#092750] md:text-4xl lg:text-5xl">
            Wissenschaft. Praxis.{" "}
            <span className="text-[#65a82f]">
              Austausch.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[820px] text-lg leading-relaxed text-slate-600 md:text-xl md:leading-relaxed">
            Vom 3. bis 5. Juni 2027 wird Bregenz zum Treffpunkt der
            deutschsprachigen Ernährungsmedizin. Die Nutrition 2027 bringt
            Fachpersonen aus Medizin, Diätologie, Pflege, Pharmazie und
            Wissenschaft zusammen und verbindet aktuelle Forschung mit
            konkreten Fragen aus der klinischen Versorgung.
          </p>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#092750]">
            Drei Länder
            <span className="mx-3 text-[#65a82f]">·</span>
            Drei Fachgesellschaften
            <span className="mx-3 text-[#65a82f]">·</span>
            Ein gemeinsamer Kongress
          </p>

          <div className="mt-10">
            <a
              href="#programm"
              className="
                inline-flex items-center gap-2
                text-sm font-semibold uppercase tracking-[0.12em]
                text-[#0064a7]
                transition-colors duration-200
                hover:text-[#65a82f]
              "
            >
              Themen entdecken
              <span aria-hidden="true" className="text-lg">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}