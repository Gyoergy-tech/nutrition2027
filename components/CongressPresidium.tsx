import Image from "next/image";
import { path } from "@/lib/paths";

const presidents = [
  {
    name: "Prim. Univ. Prof. Dr. Felix Keil",
    role: "Kongresspräsident",
    image: path("/images/kongress/felix-keil.jpeg"),
  },
  {
    name: "DDr.in Arabella Fischer-Hammerschmied",
    role: "Kongresspräsidentin",
    image: path("/images/kongress/arabella-fischer-hammerschmied.png"),
  },
  {
    name: "OA Dr. Patrick Clemens",
    role: "Kongresspräsident",
    image: path("/images/kongress/patrick-clemens.jpg"),
  },
];

export default function CongressPresidium() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1536px] px-6 py-20 lg:px-8 lg:py-24">

        {/* Überschrift */}
        <div className="max-w-[720px]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0064a7]">
            Kongresspräsidium
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#092750] lg:text-5xl">
            Gemeinsam für die{" "}
            <span className="text-[#65a82f]">Nutrition 2027.</span>
          </h2>
        </div>

        {/* Präsidium */}
        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:gap-10">
          {presidents.map((person) => (
            <article key={person.name}>
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0064a7]">
                  {person.role}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-[#092750]">
                  {person.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}