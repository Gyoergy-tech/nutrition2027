export default function RegistrationCTA() {
  return (
    <section
      id="anmeldung"
      className="bg-gradient-to-r from-[#0064a7] via-[#078a9a] to-[#65a82f]"
    >
      <div className="mx-auto max-w-[1536px] px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Nutrition 2027
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white lg:text-5xl">
              Seien Sie in Bregenz dabei.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-white/85">
              03.–05. Juni 2027 · Festspielhaus Bregenz
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://www.ake-nutrition.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                rounded-md
                bg-white
                px-7 py-4
                text-sm font-semibold uppercase tracking-[0.1em]
                text-[#092750]
                shadow-sm
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              Zur Anmeldung
              <span 
              aria-hidden="true"
              className="text-base font-normal"
              >↗</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}