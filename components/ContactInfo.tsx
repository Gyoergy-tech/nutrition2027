export default function ContactInfo() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1536px] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-14 lg:grid-cols-2 lg:gap-0">
          {/* Allgemeine Anfragen */}
          <div className="lg:pr-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Allgemeine Anfragen
            </p>

            <h2 className="mt-5 text-2xl font-semibold text-[#092750]">
              Arbeitsgemeinschaft Klinische Ernährung
            </h2>

            <p className="mt-2 text-lg text-slate-600">
              AKE · Österreich
            </p>

            <div className="mt-8 space-y-1 text-lg leading-relaxed text-slate-600">
              <p>Geschäftsführung Alexandra Schweiger, BSc.</p>
              <p>Bacharnsdorf 1</p>
              <p>3621 Rossatz-Arnsdorf</p>
              <p>Österreich</p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3">
              <a
                href="mailto:office@ake-nutrition.at"
                className="
                  text-lg font-semibold text-[#0064a7]
                  transition-colors duration-200
                  hover:text-[#65a82f]
                "
              >
                office@ake-nutrition.at
              </a>

              <a
                href="tel:+4366488100623"
                className="
                  text-lg font-semibold text-[#0064a7]
                  transition-colors duration-200
                  hover:text-[#65a82f]
                "
              >
                +43 664 88 100 623
              </a>

              <a
                href="https://ake-nutrition.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-3 inline-flex items-center gap-2
                  text-sm font-semibold uppercase tracking-[0.1em]
                  text-[#0064a7]
                  transition-colors duration-200
                  hover:text-[#65a82f]
                "
              >
                AKE Website
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Anmeldung & Industrie */}
          <div
            className="
              border-t border-slate-200 pt-14
              lg:border-l lg:border-t-0
              lg:pl-20 lg:pt-0
            "
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Anmeldung &amp; Industrie
            </p>

            <h2 className="mt-5 text-2xl font-semibold text-[#092750]">
              Sanicademia Fortbildungsverein
            </h2>

            <p className="mt-2 text-lg text-slate-600">
              MMag. Kathrin Brugger
            </p>

            <div className="mt-8 space-y-1 text-lg leading-relaxed text-slate-600">
              <p>Nikolaigasse 43</p>
              <p>9500 Villach</p>
              <p>Österreich</p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3">
              <a
                href="mailto:kathrin.brugger@sanicaedmia.eu"
                className="
                  text-lg font-semibold text-[#0064a7]
                  transition-colors duration-200
                  hover:text-[#65a82f]
                "
              >
                kathrin.brugger@sanicaedmia.eu
              </a>

              <a
                href="tel:+436766585337"
                className="
                  text-lg font-semibold text-[#0064a7]
                  transition-colors duration-200
                  hover:text-[#65a82f]
                "
              >
                +43 676 65 85 337
              </a>

              <a
                href="https://www.sanicademia.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-3 inline-flex items-center gap-2
                  text-sm font-semibold uppercase tracking-[0.1em]
                  text-[#0064a7]
                  transition-colors duration-200
                  hover:text-[#65a82f]
                "
              >
                Sanicademia Website
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Kongressdaten */}
        <div className="mx-auto mt-20 max-w-[1100px] border-t border-slate-200 pt-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0064a7]">
                Kongress
              </p>
              <p className="mt-3 text-lg font-semibold text-[#092750]">
                Nutrition 2027
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0064a7]">
                Termin
              </p>
              <p className="mt-3 text-lg font-semibold text-[#092750]">
                03.–05. Juni 2027
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0064a7]">
                Veranstaltungsort
              </p>
              <p className="mt-3 text-lg font-semibold text-[#092750]">
                Festspielhaus Bregenz
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}