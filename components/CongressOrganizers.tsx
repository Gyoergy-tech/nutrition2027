const societies = [
  {
    name: "Arbeitsgemeinschaft Klinische Ernährung",
    abbreviation: "AKE",
    country: "Österreich",
  },
  {
    name: "Deutsche Gesellschaft für Ernährungsmedizin",
    abbreviation: "DGEM",
    country: "Deutschland",
  },
  {
    name: "Gesellschaft für Ernährungsmedizin und Metabolismus Schweiz",
    abbreviation: "GESKES",
    country: "Schweiz",
  },
];

export default function CongressOrganizers() {
  return (
    <section className="bg-[#f5f7f9]">
      <div className="mx-auto max-w-[1536px] px-6 py-16 lg:px-8 lg:py-20">

        {/* Einleitung */}
        <div className="max-w-[900px]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0064a7]">
            Gemeinsam veranstaltet
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Die 25. Dreiländertagung Nutrition 2027 wird gemeinsam von den
            ernährungsmedizinischen Fachgesellschaften aus Österreich,
            Deutschland und der Schweiz veranstaltet.
          </p>
        </div>

        {/* Fachgesellschaften */}
        <div className="mt-10 border-t border-slate-300">
          {societies.map((society) => (
            <div
              key={society.abbreviation}
              className="
                grid gap-3 border-b border-slate-300 py-6
                md:grid-cols-[24px_1fr_auto]
                md:items-center md:gap-7
              "
            >
              {/* Marker */}
              <span
                aria-hidden="true"
                className="
                  hidden h-3 w-3
                  bg-gradient-to-br
                  from-[#0064a7]
                  to-[#65a82f]
                  md:block
                "
              />

              {/* Name */}
              <p className="text-lg font-semibold leading-snug text-[#092750]">
                {society.name}
              </p>

              {/* Abkürzung + Land */}
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                {society.abbreviation} · {society.country}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}