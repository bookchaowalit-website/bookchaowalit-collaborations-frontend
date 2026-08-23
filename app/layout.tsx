import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Collaborations | Bookchaowalit",
  description: "Track collab requests.",
  keywords: ["collaborations", "portfolio"],
  authors: [{ name: "Bookchaowalit", url: "https://bookchaowalit.com" }],
  creator: "Bookchaowalit",
  metadataBase: new URL("https://bookchaowalit.com"),
  openGraph: {
    type: "website",
    title: "Collaborations | Bookchaowalit",
    description: "Track collab requests.",
    siteName: "Bookchaowalit",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* THESIS: A collaboration list grows like a botanical folio, refusing the flat CRUD dashboard. OWN-WORLD: warm paper, moss ink, pressed-leaf rules, and rose specimen marks. STORY: visitors plant a note, scan living threads, and remove dead growth. FIRST VIEWPORT: oversized folio title, stem index, living-thread count, then the note workbench. FORM: botanical sequence folio, assigned grounded direction 6, seed cfce187f. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
