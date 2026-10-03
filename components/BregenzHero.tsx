import Image from "next/image";
import HeroDivider from "./HeroDivider";

export default function BregenzHero() {
  return (
    <section className="mt-16 bg-white">
      <div className="mx-auto max-w-[1536px] px-6 pt-10 lg:px-8 lg:pt-14">
        <div className="relative">
          {/* Bild */}
          <div className="relative h-[500px] overflow-hidden lg:h-[700px]">
            <Image
                src="/images/bregenz/bregenz.jpg"
                alt="Festspielhaus Bregenz am Bodensee"
                fill
                priority
                sizes="(max-width: 1536px) 100vw, 1536px"
                className="object-cover object-center"
            />
          </div>

          {/* Textfläche */}
       
            <div
            className="
                relative mx-4 -mt-16
                bg-white px-7 py-8
                shadow-[0_12px_35px_rgba(9,39,80,0.08)]
                sm:mx-8
                lg:absolute lg:bottom-0 lg:left-0
                lg:mx-0 lg:w-[540px]
                lg:px-10 lg:py-9
            "
            >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0064a7]">
              Anreise & Aufenthalt
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#092750] lg:text-5xl">
              Willkommen in{" "}
              <span className="text-[#65a82f]">Bregenz.</span>
            </h1>

            <p className="mt-5 max-w-[520px] text-base leading-7 text-slate-600">
              Direkt am Bodensee bietet das Festspielhaus Bregenz den Rahmen
              für drei Tage Wissenschaft, Praxis und persönlichen Austausch.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-5 max-w-[1536px] px-6 lg:mb-10 lg:px-8">
        <HeroDivider />
      </div>
    </section>
  );
}