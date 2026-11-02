import Image from "next/image";

const committee = [
  {
    society: "DGEM",
    members: [
      { name: "Prof. Dr. med. Jürgen Bauer", image: "/images/scientific-committee/bauer.jpg" },
      { name: "Prof. Dr. Christian Sina", image: "/images/scientific-committee/sina.png" },
    ],
  },
  {
    society: "GESKES",
    members: [
      { name: "Prof. Dr. med. Philipp Schütz", image: "/images/scientific-committee/schütz.jpg" },
      { name: "Dr. med. Claudia Krieger-Grübel", image: "/images/scientific-committee/krieger-grübel.png" },
    ],
  },
  {
    society: "AKE",
    members: [
      { name: "PD Dr.in Mag.a Karin Schindler", image: null },
      { name: "Univ. Prof. Dr. Michael Hiesmayr, MD, MSc.", image: null },
    ],
  },
];

export default function ScientificCommittee() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1536px] px-6 pb-14 pt-8 lg:px-8 lg:pb-16 lg:pt-10">
        <div className="mb-9 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0064a7]">
            Wissenschaftliches Komitee
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#092750] lg:text-4xl">
            Scientific Committee
          </h2>
          <div className="mx-auto mt-5 h-1 w-16 bg-[#65a82f]" />
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {committee.map((group) => (
            <div key={group.society} className="text-center">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#0064a7]">
                {group.society}
              </h3>
              <div className="flex flex-col items-center gap-6">
                {group.members.map((member) => (
                  <div key={member.name} className="flex flex-col items-center">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-slate-300" aria-label="Foto folgt">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-9 w-9" aria-hidden="true">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="mt-3 max-w-[280px] text-base font-semibold leading-snug text-[#092750]">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
