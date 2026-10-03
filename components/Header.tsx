"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <nav className="relative mx-auto max-w-[1536px] px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="text-lg font-bold tracking-[0.08em] text-[#092750]"
            >
            NUTRITION <span className="font-normal">2027</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-10 text-sm font-semibold uppercase tracking-wider text-[#092750] md:flex">
            <li>
              <a href="/" className="text-gray-800 hover:text-gray-500">
                Home
              </a>
            </li>
            
            <li>
              <a href="/kongress" className="text-gray-800 hover:text-gray-500">
                Kongress
              </a>
            </li>

            <li>
              <a href="/programm" className="text-gray-800 hover:text-gray-500">
                Programm 
              </a>
            </li>

            <li>
              <a href="/bregenz" className="text-gray-800 hover:text-gray-500">
                Bregenz
              </a>
            </li>
            {/* TODO: Durch direkten Anmeldelink für Nutrition 2027 ersetzen */}
            
            <li>
                <a
                    href="https://ake-nutrition.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded
                                bg-gradient-to-r from-[#0064a7] to-[#65a82f]
                                px-7 py-3 text-sm font-semibold uppercase tracking-wider
                                text-white shadow-sm transition
                                hover:brightness-110"
                    >
                    Anmeldung
                </a>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
        className={`
            absolute left-0 top-16 w-full overflow-hidden
            border-t border-gray-200 bg-white shadow-lg
            transition-all duration-300 ease-in-out
            md:hidden
            ${
            menuOpen
                ? "max-h-96 translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }
        `}
        >
        <ul className="flex flex-col items-center px-6 py-6 text-center font-medium">
            <li className="w-full">
            <a
                href="#kongress"
                className="block py-3 text-gray-800 transition-colors hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
            >
                Kongress
            </a>
            </li>

            <li className="w-full">
            <a
                href="#programm"
                className="block py-3 text-gray-800 transition-colors hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
            >
                Programm & Themen
            </a>
            </li>

            <li className="w-full">
            <a
                href="#bregenz"
                className="block py-3 text-gray-800 transition-colors hover:text-gray-500"
                onClick={() => setMenuOpen(false)}
            >
                Bregenz
            </a>
            </li>

            {/* TODO: Durch direkten Anmeldelink für Nutrition 2027 ersetzen */}
            <li className="mt-4 w-full max-w-xs">
            <a
                href="https://ake-nutrition.at/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex w-full items-center justify-center
                rounded-md
                bg-gradient-to-r from-[#0064a7] to-[#65a82f]
                px-8 py-4
                text-base font-semibold uppercase tracking-wider
                text-white shadow-sm
                transition duration-200
                hover:brightness-110
                "
                onClick={() => setMenuOpen(false)}
            >
                Anmeldung
            </a>
            </li>
        </ul>
        </div>
      </nav>
    </header>
  );
}