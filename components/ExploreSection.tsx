export default function ExploreSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* =====================================================
          INHALT
      ====================================================== */}

      <div className="mx-auto max-w-[1536px] px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-[700px]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0064a7]">
            Rund um den Kongress
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-[#092750] lg:text-5xl">
            Alles Wichtige für{" "}
            <span className="text-[#65a82f]">
              Ihren Besuch.
            </span>
          </h2>
        </div>

        <div className="mt-14 border-t border-slate-200">
          {/* ABSTRACTS */}
          <a
            href="/abstracts"
            className="
              group grid gap-5
              border-b border-slate-200
              py-9
              transition-colors duration-300
              hover:bg-slate-50/70
              md:grid-cols-[180px_1fr_auto]
              md:items-center
              md:px-5
            "
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0064a7]">
              Abstracts
            </span>

            <div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-[#092750]">
                  Eigene Forschung präsentieren.
                </h3>

                {/* Pfeil Mobile */}
                <span
                  aria-hidden="true"
                  className="
                    shrink-0 text-lg text-[#092750]
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#65a82f]
                    md:hidden
                  "
                >
                  →
                </span>
              </div>

              <p className="mt-2 max-w-[650px] text-base leading-relaxed text-slate-600">
                Reichen Sie Ihre wissenschaftliche Arbeit ein und gestalten
                Sie das Programm der Nutrition 2027 aktiv mit.
              </p>
            </div>

            {/* Pfeil Desktop */}
            <span
              aria-hidden="true"
              className="
                hidden text-lg text-[#092750]
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:text-[#65a82f]
                md:block
              "
            >
              →
            </span>
          </a>

          {/* BREGENZ */}
          <a
            href="/bregenz"
            className="
              group grid gap-5
              border-b border-slate-200
              py-9
              transition-colors duration-300
              hover:bg-slate-50/70
              md:grid-cols-[180px_1fr_auto]
              md:items-center
              md:px-5
            "
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0064a7]">
              Bregenz
            </span>

            <div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-[#092750]">
                  Kongress am Bodensee.
                </h3>

                {/* Pfeil Mobile */}
                <span
                  aria-hidden="true"
                  className="
                    shrink-0 text-lg text-[#092750]
                    transition-all duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#65a82f]
                    md:hidden
                  "
                >
                  →
                </span>
              </div>

              <p className="mt-2 max-w-[650px] text-base leading-relaxed text-slate-600">
                Informationen zum Festspielhaus Bregenz, zur Anreise und zu
                Übernachtungsmöglichkeiten während des Kongresses.
              </p>
            </div>

            {/* Pfeil Desktop */}
            <span
              aria-hidden="true"
              className="
                hidden text-lg text-[#092750]
                transition-all duration-300
                group-hover:translate-x-1
                group-hover:text-[#65a82f]
                md:block
              "
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}