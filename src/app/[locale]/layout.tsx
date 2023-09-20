import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { Header } from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import { ScheduleClassButton } from "@/components/ScheduleClassButton";
import { Barlow, Raleway, Roboto } from "next/font/google";

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

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "auto",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Deepdive School",
  description: "A Evolução do Inglês para Profissionais Globais",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${raleway.variable} ${roboto.variable} ${barlow.variable} flex w-full flex-1 flex-col bg-brand-primary-blue text-white`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          {/* <Footer /> */}
          <NewFooter />
          <ScheduleClassButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
