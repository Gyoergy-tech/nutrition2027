export default function AbstractSubmission() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1536px] px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 border-t border-slate-200 pt-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">

          <div className="max-w-[820px]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0064a7]">
              Eigene Forschung präsentieren
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#092750] lg:text-5xl">
              Ihr Beitrag zur{" "}
              <span className="text-[#65a82f]">
                Nutrition 2027.
              </span>
            </h2>

            <p className="mt-5 max-w-[720px] text-lg leading-relaxed text-slate-600">
              Reichen Sie Ihren wissenschaftlichen Beitrag zur Nutrition 2027
              ein. Abstracts können für freie Vorträge und Präsentationen
              eingereicht werden.
            </p>

            <p className="mt-3 text-base leading-7 text-slate-500">
              Informationen zu Fristen, Formaten und Einreichungsmodalitäten
              folgen.
            </p>
          </div>

          <div className="lg:text-right">
            <button
              type="button"
              disabled
              className="
                inline-flex w-fit cursor-not-allowed
                items-center justify-center
                bg-slate-200 px-7 py-4
                text-sm font-semibold uppercase
                tracking-[0.12em] text-slate-500
              "
            >
              Einreichung folgt
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}