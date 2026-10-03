export default function BregenzInfo() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1536px] px-6 pb-20 pt-12 lg:px-8 lg:pb-24 lg:pt-14">
        {/* Intro */}
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0064a7]">
            Kongress am Bodensee
          </p>

          <p className="mx-auto mt-6 max-w-[760px] text-lg leading-relaxed text-slate-600">
            Verbinden Sie Ihren Besuch der Nutrition 2027 mit einem Aufenthalt
            am Bodensee. Zwischen See und Bergen bietet Bregenz kurze Wege,
            vielfältige Freizeitmöglichkeiten und den passenden Rahmen, um den
            Kongresstag entspannt ausklingen zu lassen.
          </p>
        </div>

        {/* Datum / Veranstaltungsort / Route */}
        <div
          className="
            mt-10 flex
            flex-col items-center justify-center gap-5
            border-y border-slate-200 py-7 text-center
            md:flex-row md:gap-10
            lg:justify-start lg:text-left
          "
        >
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

          <a
            href="https://www.google.com/maps/search/?api=1&query=Festspielhaus+Bregenz"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-sm font-semibold uppercase tracking-[0.12em]
              text-[#0064a7]
              transition-colors duration-200
              hover:text-[#65a82f]
            "
          >
            Route planen ↗
          </a>
        </div>

        {/* Anreise + Hotel */}
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Anreise */}
          <div className="lg:pr-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Anreise
            </p>

            <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-slate-600">
              Bregenz ist mit Bahn, Auto und über die umliegenden Flughäfen gut
              erreichbar. Der Bahnhof Bregenz liegt nur wenige Gehminuten vom
              Festspielhaus entfernt.
            </p>

            <a
              href="#"
              className="
                mt-6 inline-flex items-center gap-2
                text-sm font-semibold uppercase tracking-[0.1em]
                text-[#0064a7]
                transition-colors duration-200
                hover:text-[#65a82f]
              "
            >
              Informationen zur Anreise
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Hotel */}
          <div
            className="
              border-t border-slate-200 pt-12
              lg:border-l lg:border-t-0
              lg:pl-16 lg:pt-0
            "
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0064a7]">
              Hotel &amp; Aufenthalt
            </p>

            <p className="mt-5 max-w-[560px] text-lg leading-relaxed text-slate-600">
              Für die Nutrition 2027 wird über Convention Partner Vorarlberg ein
              Hotelkontingent eingerichtet. Der Buchungslink wird rechtzeitig
              veröffentlicht.
            </p>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.1em] text-slate-400">
              Hotelbuchung folgt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}