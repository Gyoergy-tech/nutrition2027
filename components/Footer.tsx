export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(110deg,#078a9a_0%,#169486_38%,#65a82f_100%)] text-white">
      <div className="mx-auto max-w-[1536px] px-6 py-20 lg:px-8 lg:py-28">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">

          {/* Kongress */}
          <div>
            <p className="text-lg font-semibold">
              NUTRITION 2027
            </p>

            <p className="mt-3 max-w-[360px] text-base leading-relaxed text-white/70">
              25. Dreiländertagung der AKE, DGEM und GESKES
              vom 3. bis 5. Juni 2027 in Bregenz.
            </p>
          </div>

          {/* Kongress */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
              Kongress
            </p>

            <nav className="mt-4 flex flex-col gap-3 text-base">
              <a
                href="/kongress"
                className="text-white/75 transition-colors hover:text-white"
              >
                Über den Kongress
              </a>

              <a
                href="/abstracts"
                className="text-white/75 transition-colors hover:text-white"
              >
                Abstracts
              </a>

              <a
                href="/bregenz"
                className="text-white/75 transition-colors hover:text-white"
              >
                Bregenz & Anreise
              </a>
            </nav>
          </div>

          {/* Service */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
              Service
            </p>

            <nav className="mt-4 flex flex-col gap-3 text-base">
              <a
                href="/kontakt"
                className="text-white/75 transition-colors hover:text-white"
              >
                Kontakt
              </a>

              <a
                href="/impressum"
                className="text-white/75 transition-colors hover:text-white"
              >
                Impressum
              </a>

              <a
                href="/datenschutz"
                className="text-white/75 transition-colors hover:text-white"
              >
                Datenschutz
              </a>
            </nav>
          </div>

        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2027 NUTRITION</p>
          <p>AKE · DGEM · GESKES</p>
        </div>

      </div>
    </footer>
  );
}