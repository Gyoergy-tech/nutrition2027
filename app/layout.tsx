import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nutrition 2027 | Bregenz",
    template: "%s | Nutrition 2027",
  },

  description:
    "25. Dreiländertagung Nutrition 2027 von AKE, DGEM und GESKES. 03.–05. Juni 2027 im Festspielhaus Bregenz.",

  keywords: [
    "Nutrition 2027",
    "Ernährungsmedizin",
    "Klinische Ernährung",
    "Kongress Ernährungsmedizin",
    "AKE",
    "DGEM",
    "GESKES",
    "Bregenz",
    "Festspielhaus Bregenz",
    "Dreiländertagung",
  ],

  authors: [
    {
      name: "Arbeitsgemeinschaft für Klinische Ernährung – AKE",
    },
  ],

  creator: "Arbeitsgemeinschaft für Klinische Ernährung – AKE",
  publisher: "Arbeitsgemeinschaft für Klinische Ernährung – AKE",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "de_AT",
    siteName: "Nutrition 2027",
    title: "Nutrition 2027 | Bregenz",
    description:
      "Wissenschaft verbindet. Ernährung verändert. 03.–05. Juni 2027 im Festspielhaus Bregenz.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nutrition 2027 | Bregenz",
    description:
      "Wissenschaft verbindet. Ernährung verändert. 03.–05. Juni 2027 im Festspielhaus Bregenz.",
  },

  category: "Kongress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}