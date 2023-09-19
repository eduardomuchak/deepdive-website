import Daniel from "@/assets/images/founders/daniel.jpeg";
import Eduardo from "@/assets/images/founders/eduardo.jpeg";
import Fernanda from "@/assets/images/founders/fernanda.png";
import Gustavo from "@/assets/images/founders/gustavo-comitre.jpeg";
import Ibis from "@/assets/images/founders/ibis.jpeg";

import { useTranslations } from "next-intl";
import { SpecialistsCarousel } from "../SpecialistsCarousel";

export function FoundersSection() {
  const t = useTranslations("FoundersSection");

  const carouselInfo = [
    {
      id: 1,
      image: Eduardo,
      name: "Eduardo Varela",
      role: "Co-founder & CEO",
      description: `${t("founder1Description")}`,
    },
    {
      id: 2,
      image: Fernanda,
      name: "Fernanda Zen",
      role: "Co-founder & COO",
      description: `${t("founder2Description")}`,
    },
    {
      id: 3,
      image: Gustavo,
      name: "Gustavo Comitre",
      role: "Co-founder & CPO",
      description: `${t("founder3Description")}`,
    },
    {
      id: 4,
      image: Ibis,
      name: "Ibis Prevedello",
      role: "Co-founder & AI",
      description: `${t("founder5Description")}`,
    },
    {
      id: 5,
      image: Daniel,
      name: "Daniel Blank",
      role: "Co-founder & Platform",
      description: `${t("founder4Description")}`,
    },
    {
      id: 6,
      image: Gustavo,
      name: "Gustavo Comitre",
      role: "Co-founder & CPO",
      description: `${t("founder3Description")}`,
    },
    {
      id: 7,
      image: Eduardo,
      name: "Eduardo Varela",
      role: "Co-founder & CEO",
      description: `${t("founder1Description")}`,
    },
    {
      id: 8,
      image: Fernanda,
      name: "Fernanda Zen",
      role: "Co-founder & COO",
      description: `${t("founder2Description")}`,
    },
    {
      id: 9,
      image: Gustavo,
      name: "Gustavo Comitre",
      role: "Co-founder & CPO",
      description: `${t("founder3Description")}`,
    },
    {
      id: 10,
      image: Ibis,
      name: "Ibis Prevedello",
      role: "Co-founder & AI",
      description: `${t("founder5Description")}`,
    },
    {
      id: 11,
      image: Daniel,
      name: "Daniel Blank",
      role: "Co-founder & Platform",
      description: `${t("founder4Description")}`,
    },
    {
      id: 12,
      image: Gustavo,
      name: "Gustavo Comitre",
      role: "Co-founder & CPO",
      description: `${t("founder3Description")}`,
    },
  ];

  return (
    <div className="mx-auto mt-[60px] flex w-full max-w-6xl flex-col items-center justify-between md:mt-[130px]">
      <h1 className="mb-10 text-center font-alt text-[32px] font-bold tracking-tight text-white">
        {t("title")}
      </h1>
      <div className="mx-auto flex w-full max-w-6xl">
        <SpecialistsCarousel info={carouselInfo} />
      </div>
    </div>
  );
}
