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

        <div className="mt-10 grid items-center gap-10 md:grid-cols-3 md:gap-0">
          {/* AKE */}
          <div className="flex min-h-[180px] items-center justify-center px-8 md:border-r md:border-gray-200 scale-75">
            <div className="flex flex-col items-center">
              <img
                src="/images/logos/ake2.jpg"
                alt="AKE – Arbeitsgemeinschaft Klinische Ernährung"
                className="h-[125px] w-auto object-contain"
              />
            </div>
          </div>

          {/* DGEM */}
          <div className="flex min-h-[180px] items-center justify-center px-8 md:border-r md:border-gray-200">
            <img
              src="/images/logos/dgem.png"
              alt="DGEM – Deutsche Gesellschaft für Ernährungsmedizin"
              className="h-auto max-h-[115px] w-full max-w-[340px] object-contain"
            />
          </div>

          {/* GESKES */}
          <div className="flex min-h-[180px] items-center justify-center px-8">
            <img
              src="/images/logos/geskes.png"
              alt="GESKES SSNC – Gesellschaft für Ernährungsmedizin und Metabolismus Schweiz"
              className="h-auto max-h-[125px] w-full max-w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}