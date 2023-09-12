import { useTranslations } from "next-intl";
import { Check } from "phosphor-react";
import { DeepdiveProgram } from "../DeepdiveProgram";
import { Experience } from "../Experience";

export function GlobalTrendsSection() {
  const t = useTranslations("GlobalTrendsSection");
  const whyChooseDeepdive = [
    {
      id: 1,
      title: `${t("whyChoose1")}`,
    },
    {
      id: 2,
      title: `${t("whyChoose2")}`,
    },
    {
      id: 3,
      title: `${t("whyChoose3")}`,
    },
    {
      id: 4,
      title: `${t("whyChoose4")}`,
    },
    {
      id: 5,
      title: `${t("whyChoose5")}`,
    },
  ];

  const experiences = [
    {
      id: 1,
      title: `${t("SXSWTitle")}`,
      content: `${t("SXSW")}`,
      month: `${t("march")}`,
      year: 2024,
    },
    {
      id: 2,
      title: `${t("londonTechWeekTitle")}`,
      content: `${t("londonTechWeek")}`,
      month: `${t("june")}`,
      year: 2024,
    },
  ];
  return (
    <div className="mx-auto mt-[60px] flex w-full max-w-6xl flex-col px-4 md:mt-[100px] md:flex-row md:gap-4">
      <div className="flex flex-1 flex-col">
        <h1 className="mb-6 font-alt text-[24px] font-bold tracking-tight md:mb-10 md:text-[28px] lg:text-[32px]">
          Global Trends Experiences
        </h1>
        <span className="mb-2 max-w-[419px]  font-sans text-base text-brand-gray md:mb-6">
          {t("text")}
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
