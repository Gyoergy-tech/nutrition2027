"use client";

import { useState } from "react";
import { topics } from "@/data/topics";
import { path } from "@/lib/paths";

export default function TopicsPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleTopic = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="programm" className="bg-[#f5f7f9]">
      <div className="mx-auto max-w-[1536px] px-6 py-20 lg:px-8 lg:py-28">
        {/* Themenbereich */}
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Links – Einleitung */}
          <div className="lg:pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0064a7]">
              Programm & Themen
            </p>

            <h2 className="mt-6 max-w-[520px] text-4xl font-semibold leading-[1.1] tracking-tight text-[#092750] lg:text-5xl">
              Ernährung neu denken.

              <span className="mt-2 block text-[#65a82f]">
                Versorgung weiterentwickeln.
              </span>
            </h2>

            <p className="mt-7 max-w-[500px] text-lg leading-relaxed text-slate-600">
              Die Nutrition 2027 greift aktuelle Entwicklungen der
              Ernährungsmedizin auf und bringt wissenschaftliche Evidenz,
              klinische Praxis und neue Perspektiven zusammen.
            </p>

            <p className="mt-8 text-sm font-medium text-slate-500">
              Wählen Sie ein Thema, um mehr zu erfahren.
            </p>
          </div>

          {/* Rechts – Accordion */}
          <div className="border-t border-slate-300">
            {topics.map((topic, index) => {
              const isOpen = openIndex === index;
              const isLast = index === topics.length - 1;
              const panelId = `topic-panel-${index}`;
              const buttonId = `topic-button-${index}`;

              return (
                <div
                  key={topic.title}
                  className={`
                    group
                    transition-colors duration-300
                    ${
                      isLast
                        ? "md:border-b md:border-slate-300"
                        : "border-b border-slate-300"
                    }
                  `}
                >
                  {/* Accordion-Kopf */}
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleTopic(index)}
                    className="
                      relative z-20
                      grid w-full
                      cursor-pointer
                      touch-manipulation
                      select-none

                      grid-cols-[1fr_32px]
                      items-center
                      gap-x-4
                      py-5
                      text-left

                      md:grid-cols-[48px_1fr_32px]
                      md:gap-x-3

                      active:bg-slate-100

                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#0064a7]
                      focus-visible:ring-offset-4
                    "
                  >
                    {/* Nummer – nur Tablet/Desktop */}
                    <span className="hidden text-sm font-semibold text-[#0064a7] md:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Titel */}
                    <span
                      className={`
                        min-w-0
                        text-base font-semibold
                        transition-colors duration-300
                        md:text-lg
                        ${
                          isOpen
                            ? "text-[#0064a7]"
                            : "text-[#092750] group-hover:text-[#0064a7]"
                        }
                      `}
                    >
                      {topic.title}
                    </span>

                    {/* Plus / Minus */}
                    <span
                      aria-hidden="true"
                      className="
                        relative
                        flex h-7 w-7
                        items-center justify-center
                        justify-self-end
                      "
                    >
                      {/* Horizontale Linie */}
                      <span
                        className="
                          absolute
                          h-[1.5px] w-4
                          bg-[#092750]
                          transition-colors duration-300
                          group-hover:bg-[#0064a7]
                        "
                      />

                      {/* Vertikale Linie */}
                      <span
                        className={`
                          absolute
                          h-4 w-[1.5px]
                          bg-[#092750]
                          transition-all
                          duration-300
                          ease-in-out
                          group-hover:bg-[#0064a7]
                          ${
                            isOpen
                              ? "rotate-90 opacity-0"
                              : "rotate-0 opacity-100"
                          }
                        `}
                      />
                    </span>
                  </button>

                  {/* Animierter Inhalt */}
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-500
                      ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`
                          grid
                          grid-cols-[1fr_32px]
                          gap-x-4

                          md:grid-cols-[48px_1fr_32px]
                          md:gap-x-3

                          transition-[padding]
                          duration-500
                          ease-[cubic-bezier(0.4,0,0.2,1)]

                          ${isOpen ? "pb-7" : "pb-0"}
                        `}
                      >
                        {/* Leerspalte für Nummer erst ab md */}
                        <div className="hidden md:block" />

                        <p className="max-w-[680px] text-base leading-7 text-slate-600">
                          {topic.text}
                        </p>

                        {/* Hält Text vom +/- Bereich fern */}
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Programm CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0064a7]">
            Programm 2027
          </p>

          <p className="mt-3 text-base text-slate-600">
            Alle Vorträge, Sessions und Zeiten im Überblick.
          </p>

          <a
            href={path("/downloads/nutrition-2027-programm.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 inline-flex items-center justify-center
              rounded-md
              bg-gradient-to-r from-[#0064a7] to-[#65a82f]
              px-7 py-3.5
              text-sm font-semibold uppercase tracking-[0.1em]
              text-white
              transition duration-200
              hover:brightness-110
            "
          >
            Programm ansehen
          </a>
        </div>
      </div>
    </section>
  );
}