
import { path } from "@/lib/paths";

export default function OrganizerSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1536px] px-6 pb-10 pt-12 lg:px-8 lg:pb-12 lg:pt-14">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#092750] md:text-base">
            Gemeinsam veranstaltet von
          </p>

          <div className="mx-auto mt-5 h-[3px] w-10 bg-gradient-to-r from-[#0064a7] to-[#65a82f]" />
        </div>

        <div className="mt-10 grid items-center gap-6 md:grid-cols-3 md:gap-0">
          {/* AKE */}
          <div className="flex h-[140px] items-center justify-center px-8 md:h-[180px] md:border-r md:border-gray-200">
            <a
              href="https://ake-nutrition.at"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="AKE – Website öffnen"
              className="inline-flex items-center justify-center"
            >
              <img
                src={path("/images/logos/ake2.jpg")}
                alt="AKE – Arbeitsgemeinschaft Klinische Ernährung"
                className="max-h-[110px] w-full max-w-[300px] object-contain"
              />
            </a>
          </div>

          {/* DGEM */}
          <div className="flex h-[140px] items-center justify-center px-8 md:h-[180px] md:border-r md:border-gray-200">
            <a
              href="https://www.dgem.de"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DGEM – Website öffnen"
              className="inline-flex items-center justify-center"
            >
              <img
                src={path("/images/logos/dgem.png")}
                alt="DGEM – Deutsche Gesellschaft für Ernährungsmedizin e.V."
                className="max-h-[110px] w-full max-w-[300px] object-contain"
              />
            </a>
          </div>

          {/* GESKES */}
          <div className="flex h-[140px] items-center justify-center px-8 md:h-[180px]">
            <a
              href="https://geskes.ch"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GESKES – Website öffnen"
              className="inline-flex items-center justify-center"
            >
              <img
                src={path("/images/logos/geskes.png")}
                alt="GESKES SSNC – Gesellschaft für Ernährungsmedizin und Metabolismus Schweiz"
                className="max-h-[110px] w-full max-w-[300px] object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
