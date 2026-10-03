export default function NutritionWave() {
  return (
    <div
        className="
            pointer-events-none
            absolute bottom-0 left-1/2 z-20
            h-[175px] w-full max-w-[1800px]
            -translate-x-1/2
            overflow-hidden
        "
        >
      <svg
        viewBox="0 0 1536 175"
        preserveAspectRatio="none"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {/* Blau -> Türkis -> Grün */}
          <linearGradient
            id="nutritionWave"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#0064a7" />
            <stop offset="48%" stopColor="#078a9a" />
            <stop offset="100%" stopColor="#65a82f" />
          </linearGradient>

          {/* Weißer Übergang zum nächsten Abschnitt */}
          <linearGradient
            id="waveBackground"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="25%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* =====================================================
            WEISSES WELLENBAND
        ====================================================== */}
        <path
          d="
            M0 80
            C190 30 335 122 525 82
            C710 43 845 21 1015 67
            C1190 114 1355 103 1536 55
            L1536 175
            L0 175
            Z
          "
          fill="url(#waveBackground)"
        />

        {/* =====================================================
            FEINE WELLENFAMILIE A
        ====================================================== */}
        {Array.from({ length: 15 }).map((_, i) => {
          const y = i * 4;
          const x = i * 7;

          return (
            <path
              key={`wave-a-${i}`}
              d={`
                M ${-120 + x} ${77 + y}

                C ${80 + x} ${31 + y},
                  ${270 + x} ${118 + y},
                  ${480 + x} ${78 + y}

                C ${655 + x} ${45 + y},
                  ${805 + x} ${17 + y},
                  ${990 + x} ${64 + y}

                C ${1160 + x} ${108 + y},
                  ${1340 + x} ${96 + y},
                  ${1660 + x} ${42 + y}
              `}
              fill="none"
              stroke="url(#nutritionWave)"
              strokeWidth="1"
              strokeOpacity={Math.max(0.12, 0.42 - i * 0.012)}
            />
          );
        })}

        {/* =====================================================
            FEINE WELLENFAMILIE B
            leicht gegenläufig
        ====================================================== */}
        {Array.from({ length: 11 }).map((_, i) => {
          const y = i * 4.8;
          const x = i * -9;

          return (
            <path
              key={`wave-b-${i}`}
              d={`
                M ${-180 + x} ${94 + y}

                C ${40 + x} ${50 + y},
                  ${235 + x} ${106 + y},
                  ${430 + x} ${88 + y}

                C ${625 + x} ${69 + y},
                  ${760 + x} ${34 + y},
                  ${950 + x} ${69 + y}

                C ${1145 + x} ${105 + y},
                  ${1320 + x} ${113 + y},
                  ${1710 + x} ${55 + y}
              `}
              fill="none"
              stroke="url(#nutritionWave)"
              strokeWidth="0.8"
              strokeOpacity={Math.max(0.1, 0.26 - i * 0.009)}
            />
          );
        })}

        {/* =====================================================
            KRÄFTIGE LEITLINIEN
        ====================================================== */}

        <path
          d="
            M -80 92
            C 120 38, 300 126, 500 82
            C 690 40, 825 18, 1010 66
            C 1190 112, 1370 94, 1600 45
          "
          fill="none"
          stroke="url(#nutritionWave)"
          strokeWidth="2.6"
          strokeOpacity="0.78"
        />

        <path
          d="
            M -140 108
            C 80 62, 265 118, 470 91
            C 655 66, 800 29, 985 70
            C 1175 112, 1360 110, 1640 55
          "
          fill="none"
          stroke="url(#nutritionWave)"
          strokeWidth="2"
          strokeOpacity="0.62"
        />

        <path
          d="
            M -100 124
            C 100 79, 290 137, 495 103
            C 680 72, 830 49, 1015 87
            C 1200 125, 1370 121, 1620 70
          "
          fill="none"
          stroke="url(#nutritionWave)"
          strokeWidth="1.6"
          strokeOpacity="0.5"
        />

        {/* =====================================================
            GEGENWELLEN / ÜBERLAGERUNGEN
        ====================================================== */}

        <path
          d="
            M -120 112
            C 115 94, 290 60, 505 96
            C 705 130, 845 102, 1035 77
            C 1220 52, 1380 74, 1620 104
          "
          fill="none"
          stroke="url(#nutritionWave)"
          strokeWidth="1.8"
          strokeOpacity="0.44"
        />

        <path
          d="
            M -100 128
            C 125 107, 305 79, 510 108
            C 700 135, 855 116, 1040 91
            C 1225 67, 1400 88, 1620 116
          "
          fill="none"
          stroke="url(#nutritionWave)"
          strokeWidth="1.3"
          strokeOpacity="0.34"
        />

        <path
          d="
            M -150 139
            C 75 116, 270 91, 475 118
            C 675 145, 840 128, 1025 102
            C 1215 76, 1390 98, 1650 126
          "
          fill="none"
          stroke="url(#nutritionWave)"
          strokeWidth="0.9"
          strokeOpacity="0.24"
        />
      </svg>
    </div>
  );
}