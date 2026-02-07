import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { FilmGrain } from "@/components/ui/film-grain";
import { CustomCursor } from "@/components/ui/custom-cursor";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agnivesh Sarang | Portfolio",
  description: "Cinematographer & Photographer Portfolio",
};

import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${jost.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <FilmGrain />
            <CustomCursor />
            <Navbar />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
