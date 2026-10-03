import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mt-16 overflow-hidden bg-white">
      {/* =====================================================
          DESKTOP
      ====================================================== */}
      <div className="relative hidden h-[850px] lg:block">
        <div className="relative mx-auto h-full max-w-[1536px] overflow-hidden bg-white">
          {/* Originalfoto */}
          <div className="absolute inset-y-0 left-[25%] right-0 overflow-hidden">
            <Image
              src="/images/hero-festspielhaus.jpg"
              alt="Festspielhaus Bregenz"
              fill
              priority
              className="object-cover object-left"
            />
          </div>

          {/* Weißer Verlauf für den Textbereich */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.98)_25%,rgba(255,255,255,0.82)_36%,rgba(255,255,255,0.30)_47%,rgba(255,255,255,0)_60%)]
            "
          />

          {/* Dezenter Verlauf nach unten */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/25 to-transparent" />

          {/* Inhalt */}
          <div className="relative z-10 h-full px-8">
            <div className="flex h-full items-center">
              <div className="ml-12 w-[520px]">
                <p className="mb-1 text-sm font-semibold uppercase tracking-[0.15em] text-[#092750]">
                  25. Dreiländertagung
                </p>

                <p className="mb-7 text-sm font-semibold uppercase tracking-[0.15em] text-[#0064a7]">
                  AKE · DGEM · GESKES
                </p>

                <div className="mb-6 h-[3px] w-10 bg-gradient-to-r from-[#0064a7] to-[#65a82f]" />

                <h1 className="leading-none">
                  <span className="block text-6xl font-bold tracking-tight text-[#092750]">
                    NUTRITION
                  </span>

                  <span className="block bg-gradient-to-r from-[#0064a7] via-[#078a9a] to-[#65a82f] bg-clip-text text-[8rem] font-light leading-[0.9] text-transparent">
                    2027
                  </span>
                </h1>

                <div className="mt-7">
                  <p className="text-lg font-semibold text-[#092750]">
                    Wissenschaft verbindet.
                  </p>

                  <p className="text-lg font-semibold text-[#65a82f]">
                    Ernährung verändert.
                  </p>
                </div>

                <p className="mt-3 text-xl font-medium text-[#092750]">
                  Wissen teilen.{" "}
                  <span className="text-[#65a82f]">
                    Zukunft gestalten.
                  </span>
                </p>

                <div className="mt-7 space-y-2 text-lg font-semibold uppercase tracking-wide text-[#092750]">
                  <p>03.–05. Juni 2027</p>
                  <p>Festspielhaus Bregenz</p>
                </div>

                <div className="mt-7 flex gap-4">
                  <a
                    href="https://www.ake-nutrition.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center
                      rounded-md
                      bg-gradient-to-r from-[#0064a7] to-[#65a82f]
                      px-7 py-3
                      text-sm font-semibold uppercase tracking-wider
                      text-white
                      transition duration-200
                      hover:brightness-110
                    "
                  >
                    Zur Anmeldung
                  </a>

                  <a
                    href="#programm"
                    className="
                      inline-flex items-center justify-center
                      rounded-md border border-[#092750]
                      bg-white/80 px-7 py-3
                      text-sm font-semibold uppercase tracking-wider
                      text-[#092750]
                      backdrop-blur-sm
                      transition duration-200
                      hover:bg-white
                    "
                  >
                    Programm ansehen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          TABLET / IPAD HOCHKANT
          md bis unter lg
      ====================================================== */}
      <div className="hidden md:block lg:hidden">
        <div className="mx-auto grid min-h-[650px] max-w-[1536px] grid-cols-[48%_52%]">
          {/* Text links */}
          <div className="relative z-10 flex items-center bg-white px-8 py-12">
            <div className="w-full">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#092750]">
                25. Dreiländertagung
              </p>

              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-[#0064a7]">
                AKE · DGEM · GESKES
              </p>

              <div className="my-5 h-[3px] w-10 bg-gradient-to-r from-[#0064a7] to-[#65a82f]" />

              <h1 className="leading-none">
                <span className="block text-[2.7rem] font-bold tracking-tight text-[#092750]">
                  NUTRITION
                </span>

                <span className="block bg-gradient-to-r from-[#0064a7] via-[#078a9a] to-[#65a82f] bg-clip-text text-[5.7rem] font-light leading-[0.9] text-transparent">
                  2027
                </span>
              </h1>

              <div className="mt-6">
                <p className="text-lg font-semibold text-[#092750]">
                  Wissenschaft verbindet.
                </p>

                <p className="text-lg font-semibold text-[#65a82f]">
                  Ernährung verändert.
                </p>
              </div>

              <p className="mt-3 text-lg font-medium leading-snug text-[#092750]">
                Wissen teilen.{" "}
                <span className="text-[#65a82f]">
                  Zukunft gestalten.
                </span>
              </p>

              <div className="mt-6 space-y-1 text-base font-semibold uppercase tracking-wide text-[#092750]">
                <p>03.–05. Juni 2027</p>
                <p>Festspielhaus Bregenz</p>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <a
                  href="https://www.ake-nutrition.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    rounded-md
                    bg-gradient-to-r from-[#0064a7] to-[#65a82f]
                    px-5 py-3
                    text-sm font-semibold uppercase tracking-wider
                    text-white
                    transition duration-200
                    hover:brightness-110
                  "
                >
                  Zur Anmeldung
                </a>

                <a
                  href="#programm"
                  className="
                    inline-flex items-center justify-center
                    rounded-md border border-[#092750]
                    bg-white px-5 py-3
                    text-sm font-semibold uppercase tracking-wider
                    text-[#092750]
                    transition duration-200
                    hover:bg-gray-100
                  "
                >
                  Programm ansehen
                </a>
              </div>
            </div>
          </div>

          {/* Foto rechts */}
          <div className="relative min-h-[650px] overflow-hidden">
            <Image
              src="/images/hero-festspielhaus.jpg"
              alt="Festspielhaus Bregenz"
              fill
              priority
              className="object-cover object-[50%_center]"
            />

            {/* weicher Übergang zwischen Text und Bild */}
            {/* Breiter, weicher Übergang */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/80 to-transparent" />

            {/* Verstärkung direkt an der Kante */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE
          unter md
      ====================================================== */}
      <div className="md:hidden">
        {/* Foto oben */}
        <div className="relative h-[340px] w-full overflow-hidden sm:h-[430px]">
          <Image
            src="/images/hero-festspielhaus.jpg"
            alt="Festspielhaus Bregenz"
            fill
            priority
            className="object-cover object-[24%_center]"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Inhalt */}
        <div className="relative bg-white px-6 pb-10 pt-3 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#092750]">
            25. Dreiländertagung
          </p>

          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-[#0064a7]">
            AKE · DGEM · GESKES
          </p>

          <div className="my-5 h-[3px] w-10 bg-gradient-to-r from-[#0064a7] to-[#65a82f]" />

          <h1 className="leading-none">
            <span className="block text-5xl font-bold tracking-tight text-[#092750] sm:text-6xl">
              NUTRITION
            </span>

            <span className="block bg-gradient-to-r from-[#0064a7] via-[#078a9a] to-[#65a82f] bg-clip-text text-7xl font-light leading-[0.9] text-transparent sm:text-8xl">
              2027
            </span>
          </h1>

          <div className="mt-5">
            <p className="text-lg font-semibold text-[#092750]">
              Wissenschaft verbindet.
            </p>

            <p className="text-lg font-semibold text-[#65a82f]">
              Ernährung verändert.
            </p>
          </div>

          <p className="mt-3 text-lg font-medium text-[#092750]">
            Wissen teilen.{" "}
            <span className="text-[#65a82f]">
              Zukunft gestalten.
            </span>
          </p>

          <div className="mt-6 space-y-2 font-semibold uppercase tracking-wide text-[#092750]">
            <p>03.–05. Juni 2027</p>
            <p>Festspielhaus Bregenz</p>
          </div>

          <div className="mt-7 flex max-w-sm flex-col gap-3">
            <a
              href="https://www.ake-nutrition.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-md
                bg-gradient-to-r from-[#0064a7] to-[#65a82f]
                px-7 py-4
                text-center font-semibold uppercase tracking-wider
                text-white
                transition duration-200
                hover:brightness-110
              "
            >
              Zur Anmeldung
            </a>

            <a
              href="#programm"
              className="
                rounded-md border border-[#092750]
                bg-white px-7 py-4
                text-center font-semibold uppercase tracking-wider
                text-[#092750]
                transition duration-200
                hover:bg-gray-100
              "
            >
              Programm ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}