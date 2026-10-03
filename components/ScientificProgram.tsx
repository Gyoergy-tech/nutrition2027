import Image from "next/image";
import { path } from "@/lib/paths";

export default function ProgramTopics() {
  return (
    <section className="bg-[#f5f7f9]">
      <div className="mx-auto max-w-[1608px] px-6 py-16 lg:px-5 lg:py-20">
        {/* Themen-Mosaik */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {/* Mikrobiom */}
          <article
            className="
              group relative min-h-[360px] overflow-hidden
              md:col-span-2
              lg:col-span-7 lg:min-h-[430px]
            "
          >
            <Image
              src={path("/images/programm/mikrobiom.jpg")}
              alt="Mikrobiom und personalisierte Ernährung"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#092750]/90 via-[#092750]/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                Forschung &amp; Innovation
              </p>

              <h2 className="mt-3 max-w-[560px] text-3xl font-semibold leading-tight text-white">
                Mikrobiom &amp;
                <br />
                personalisierte Ernährung
              </h2>
            </div>
          </article>

          {/* Rechte Spalte Desktop / zwei Einzelkacheln Tablet */}
          <div
            className="
              grid gap-4
              md:col-span-2 md:grid-cols-2
              lg:col-span-5 lg:grid-cols-1
            "
          >
            {/* Mangelernährung */}
            <article className="flex min-h-[190px] flex-col justify-between bg-white p-7 lg:min-h-[205px] lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0064a7]">
                Klinische Versorgung
              </p>

              <h2 className="mt-8 text-2xl font-semibold leading-tight text-[#092750]">
                Mangelernährung
                <br />
                &amp; Screening
              </h2>
            </article>

            {/* Onkologie */}
            <article className="relative min-h-[190px] overflow-hidden bg-[#092750] p-7 lg:min-h-[205px] lg:p-9">
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-40 w-40 rounded-full border border-white/10"
              />

              <div className="relative flex h-full flex-col justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  Therapie &amp; Versorgung
                </p>

                <h2 className="mt-8 text-2xl font-semibold text-white">
                  Onkologie
                </h2>
              </div>
            </article>
          </div>

          {/* Geriatrie & Pädiatrie */}
          <article
            className="
              flex min-h-[220px] flex-col justify-between bg-white p-7
              md:col-span-1
              lg:col-span-4 lg:min-h-[260px] lg:p-9
            "
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0064a7]">
              Lebensphasen
            </p>

            <h2 className="mt-10 text-2xl font-semibold leading-tight text-[#092750]">
              Geriatrie
              <br />
              &amp; Pädiatrie
            </h2>
          </article>

          {/* Intensivmedizin */}
          <article
            className="
              group relative min-h-[220px] overflow-hidden
              md:col-span-1
              lg:col-span-8 lg:min-h-[260px]
            "
          >
            <Image
              src={path("/images/programm/intensivmedizin.png")}
              alt="Intensivmedizin"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#092750]/90 via-[#092750]/55 to-[#092750]/10" />

            <div className="absolute inset-0 flex flex-col justify-between p-7 lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Akutmedizin
              </p>

              <h2 className="max-w-[500px] text-2xl font-semibold leading-tight text-white">
                Intensivmedizin,
                <br />
                Chirurgie &amp; Funktion
              </h2>
            </div>
          </article>

          {/* Adipositas */}
          <article
            className="
              flex min-h-[220px] flex-col justify-between bg-[#078a9a] p-7
              md:col-span-1
              lg:col-span-5 lg:min-h-[270px] lg:p-9
            "
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
              Stoffwechsel
            </p>

            <h2 className="mt-10 text-2xl font-semibold leading-tight text-white">
              Adipositas, Diabetes
              <br />
              &amp; Stoffwechsel
            </h2>
          </article>

          {/* Nachhaltigkeit */}
          <article
            className="
              group relative min-h-[220px] overflow-hidden
              md:col-span-1
              lg:col-span-7 lg:min-h-[270px]
            "
          >
            <Image
              src={path("/images/programm/nachhaltigkeit.jpg")}
              alt="Nachhaltigkeit und Ernährungssysteme"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#092750]/85 via-[#092750]/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Planetary Health
              </p>

              <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
                Nachhaltigkeit
                <br />
                &amp; Ernährungssysteme
              </h2>
            </div>
          </article>

          {/* Wissenschaft & Nachwuchs */}
          <article
            className="
              relative overflow-hidden bg-white p-7
              md:col-span-2
              lg:col-span-12 lg:p-9
            "
          >
            <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-center lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0064a7]">
                  Wissenschaft &amp; Nachwuchs
                </p>

                <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#092750]">
                  Wissenschaft, Kontroversen &amp; Nachwuchs
                </h2>
              </div>

              <p className="max-w-[480px] text-base leading-7 text-slate-600">
                Neue Daten, freie Vorträge und kontroverse Diskussionen schaffen
                Raum für unterschiedliche Perspektiven und die nächste
                Generation der Ernährungsmedizin.
              </p>
            </div>
          </article>

          {/* Wissenschaftliches Programm */}
          <article className="bg-[#092750] md:col-span-2 lg:col-span-12">
            <div className="grid gap-10 px-7 py-10 md:grid-cols-[1fr_auto] md:items-center lg:px-12 lg:py-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#65a82f]">
                  Wissenschaftliches Programm
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  Drei Tage Wissenschaft,
                  <br className="hidden sm:block" /> Praxis und Austausch.
                </h2>

                <p className="mt-4 max-w-[620px] text-base leading-7 text-white/70">
                  Das vollständige Kongressprogramm mit Vorträgen und Sessions
                  wird hier veröffentlicht, sobald es verfügbar ist.
                </p>
              </div>

              <button
                type="button"
                disabled
                className="
                  inline-flex w-fit cursor-not-allowed
                  items-center justify-center
                  border border-white/30
                  px-7 py-4
                  text-sm font-semibold uppercase
                  tracking-[0.12em] text-white/60
                "
              >
                Programm folgt
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}