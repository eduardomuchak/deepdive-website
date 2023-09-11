import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScheduleClassButton } from "@/components/ScheduleClassButton";
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
  description: "A Evolução do Inglês para Profissionais Globais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${raleway.variable} ${roboto.variable} flex w-full flex-1 flex-col bg-brand-primary-blue text-white`}
      >
        <Header />
        {children}
        <Footer />
        <ScheduleClassButton />
      </body>
    </html>
  );
}
