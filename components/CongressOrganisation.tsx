import Image from "next/image";

export default function CongressOrganization() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1536px] px-6 py-20 lg:px-8 lg:py-24">

        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0064a7]">
          Organisation & Kontakt
        </p>

        <div className="mt-8 grid border-t border-slate-200 lg:grid-cols-2">

          {/* Organisation */}
          <div className="py-10 lg:pr-16">
            <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:items-center">

              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <Image
                  src="/images/kongress/alexandra-schweiger.jpg"
                  alt="Alexandra Schweiger"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0064a7]">
                  Organisationskomitee
                </p>

                <h2 className="mt-4 text-lg font-semibold text-[#092750]">
                  Alexandra Schweiger, BSc.
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  Arbeitsgemeinschaft Klinische Ernährung
                </p>
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div
            className="
              border-t border-slate-200 py-10
              lg:border-l lg:border-t-0 lg:pl-16
            "
          >
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0064a7]">
              Allgemeine Anfragen
            </p>

            <h2 className="mt-4 text-lg font-semibold text-[#092750]">
              Arbeitsgemeinschaft Klinische Ernährung
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Bacharnsdorf 1
              <br />
              3621 Rossatz-Arnsdorf
            </p>

            <div className="mt-6 flex flex-col items-start gap-3">
              <a
                href="mailto:office@ake-nutrition.at"
                className="text-sm font-semibold uppercase tracking-[0.1em] text-[#0064a7] transition-colors hover:text-[#65a82f]"
              >
                office@ake-nutrition.at ↗
              </a>

              <a
                href="tel:+4366488100623"
                className="text-sm font-semibold uppercase tracking-[0.1em] text-[#0064a7] transition-colors hover:text-[#65a82f]"
              >
                +43 664 88 100 623
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}