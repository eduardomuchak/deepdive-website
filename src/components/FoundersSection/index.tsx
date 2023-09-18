import Daniel from "@/assets/images/founders/daniel.jpeg";
import Eduardo from "@/assets/images/founders/eduardo.jpeg";
import Fernanda from "@/assets/images/founders/fernanda.png";
import Gustavo from "@/assets/images/founders/gustavo-comitre.jpeg";
import Ibis from "@/assets/images/founders/ibis.jpeg";

import { useTranslations } from "next-intl";
import { SpecialistsCarousel } from "../SpecialistsCarousel";

const carouselInfo = [
  {
    id: 1,
    image: Eduardo,
    name: "Eduardo Varela",
    role: "Co-founder & CEO",
    description: "Co-founder & CEO da Codenation, adquirida pela Trybe in 2020",
  },

  {
    id: 2,
    image: Fernanda,
    name: "Fernanda Zen",
    role: "Co-founder & COO",
    description:
      "Mestrado em Marketing Internacional & ex-Marketing na Henry Schein & Grupo Guga Kuerten",
  },
  {
    id: 3,
    image: Gustavo,
    name: "Gustavo Comitre",
    role: "Co-founder & CPO",
    description: "Product Director na Docplanner & Stanford Executive Program",
  },
  {
    id: 4,
    image: Ibis,
    name: "Ibis Prevedello",
    role: "Co-founder & AI",
    description:
      "Mestrado em AI & Robótica na Universidade de Roma & trabalhou anos para o mercado americano",
  },
  {
    id: 5,
    image: Daniel,
    name: "Daniel Blank",
    role: "Co-founder & Platform",
    description:
      "Cientista da Computação, 15+ anos de experiência ex-Principal Developer at Calendly",
  },
];

export function FoundersSection() {
  const t = useTranslations("FoundersSection");

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
