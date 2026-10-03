export default function ImpressumContent() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1536px] px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-[900px]">
          {/* Medieninhaber / Verantwortlicher */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Medieninhaber und verantwortlich für den Inhalt
            </p>

            <h2 className="mt-5 text-2xl font-semibold text-[#092750]">
              Arbeitsgemeinschaft für Klinische Ernährung – AKE
            </h2>

            <div className="mt-5 text-lg leading-relaxed text-slate-600">
              <p>Bacharnsdorf 1</p>
              <p>3621 Rossatz-Arnsdorf</p>
              <p>Österreich</p>
            </div>

            <div className="mt-6 flex flex-col items-start gap-2">
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
                  text-lg font-semibold text-[#0064a7]
                  transition-colors duration-200
                  hover:text-[#65a82f]
                "
              >
                ake-nutrition.at ↗
              </a>
            </div>
          </div>

          {/* Geschäftsstelle */}
          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Geschäftsstelle
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Alexandra Schweiger, BSc.
            </p>
          </div>

          {/* Vereinsregister */}
          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Vereinsregister
            </p>

            <div className="mt-5 space-y-2 text-lg leading-relaxed text-slate-600">
              <p>ZVR-Zahl: 565791754</p>
              <p>Eingetragen im Zentralen Vereinsregister.</p>
            </div>
          </div>

          {/* Inhaltliche Verantwortung */}
          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Inhaltliche Verantwortung
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Für die Inhalte dieser Website ist der Vorstand der
              Arbeitsgemeinschaft für Klinische Ernährung – AKE verantwortlich.
            </p>
          </div>

          {/* Externe Links */}
          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Externe Links
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Diese Website enthält Links zu externen Websites Dritter. Auf
              deren Inhalte und Gestaltung hat die AKE keinen Einfluss. Für die
              Inhalte der verlinkten Seiten sind die jeweiligen Betreiber
              verantwortlich.
            </p>
          </div>

          {/* Urheberrecht */}
          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Urheberrecht
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Die auf dieser Website veröffentlichten Inhalte, Texte und
              Abbildungen unterliegen dem Urheberrecht. Eine Verwendung,
              Vervielfältigung oder Verbreitung über die gesetzlich zulässigen
              Grenzen hinaus bedarf der Zustimmung des jeweiligen
              Rechteinhabers.
            </p>
          </div>

          {/* Bildnachweise */}
          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Bildnachweise
            </p>

            <div className="mt-5 space-y-3 text-lg leading-relaxed text-slate-600">
              <p>
                Festspielhaus Bregenz: © KoenigsFreunde / Festspielhaus Bregenz
              </p>

              <p>
                Bregenz: © Vorarlberg Tourismus
              </p>
            </div>
          </div>

          {/* Website */}
          <div className="mt-14 border-t border-slate-200 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Website
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Konzeption, Design und technische Umsetzung:
              <br />
              <span className="font-semibold text-[#092750]">
                Markus Györgyfalvay, Bakk BSc MSc
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}