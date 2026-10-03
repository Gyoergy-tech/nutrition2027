import HeroDivider from "./HeroDivider";

export default function ImpressumHero() {
  return (
    <section className="mt-16 bg-white">
      <div className="mx-auto max-w-[1536px] px-6 pt-14 lg:px-8 lg:pt-20">
        <div className="pb-12 lg:pb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0064a7]">
            Service
          </p>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#092750] lg:text-5xl">
            Impressum.
          </h1>
        </div>

        <HeroDivider />
      </div>
    </section>
  );
}