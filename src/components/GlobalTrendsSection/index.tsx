import { Check } from "phosphor-react";
import { DeepdiveProgram } from "../DeepdiveProgram";
import { Experience } from "../Experience";

const whyChooseDeepdive = [
  {
    id: 1,
    title: "Viagens exclusivas para líderes Deepdive",
  },
  {
    id: 2,
    title: "Principais eventos de tendências do mundo",
  },
  {
    id: 3,
    title: "Visitas a empresas internacionais",
  },
  {
    id: 4,
    title: "Momentos para agendas de trabalho",
  },
  {
    id: 5,
    title: "Networking internacional",
  },
];

const experiences = [
  {
    id: 1,
    title: "SXSW - Austin, USA",
    content:
      "SXSW (South by Southwest) é um conglomerado anual de festivais de cinema, mídia interativa e música. É um destino importante para profissionais de vários campos e oferece uma plataforma para networking, aprendizado e descoberta de novas tendências e talentos.",
    month: "Mar",
    year: 2024,
  },
  {
    id: 2,
    title: "London Tech Week - Londres, ING",
    content:
      "London Tech Week é um evento anual que reúne entusiastas de tecnologia, empreendedores e profissionais de todo o mundo para conferências, workshops e eventos de networking centrados em tecnologia, inovação e negócios.",
    month: "Jun",
    year: 2024,
  },
];

export function GlobalTrendsSection() {
  return (
    <div className="mx-auto mt-[60px] flex w-full max-w-6xl flex-col px-4 md:mt-[100px] md:flex-row">
      <div className="flex flex-1 flex-col">
        <h1 className="mb-6 font-alt text-[24px] font-bold tracking-tight md:mb-10 md:text-[32px]">
          Global Trends Experiences
        </h1>
        <span className="mb-2 max-w-[419px]  font-sans text-base text-brand-gray md:mb-6">
          Levamos você para os principais eventos de tendências globais no
          mundo.
        </span>
        <div className="mb-6 flex flex-col gap-1 md:mb-0">
          {whyChooseDeepdive.map((item) => (
            <DeepdiveProgram.Root key={item.id}>
              <DeepdiveProgram.Icon icon={Check} />
              <DeepdiveProgram.Title className="font-normal leading-tight text-brand-gray">
                {item.title}
              </DeepdiveProgram.Title>
            </DeepdiveProgram.Root>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        {experiences.map((item) => (
          <Experience
            key={item.id}
            experience={item}
            showLineDivider={item.id !== experiences.length}
          />
        ))}
      </div>
    </div>
  );
}
