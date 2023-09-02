import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import { Raleway, Roboto } from "next/font/google";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "auto",
  variable: "--font-raleway",
});

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "auto",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Deepdive School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${raleway.variable} ${roboto.variable} flex w-full flex-1 bg-brand-primary-blue text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
