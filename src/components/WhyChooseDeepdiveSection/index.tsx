import SecondaryHomeImage from "@/assets/images/Group 486.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Check } from "phosphor-react";
import { DeepdiveProgram } from "../DeepdiveProgram";

export function WhyChooseDeepdiveSection() {
  const t = useTranslations("WhyChooseDeepdiveSection");

  const whyChooseDeepdive = [
    {
      id: 1,
      title: `${t("title1")}`,
      content: `${t("text1")}`,
    },
    {
      id: 2,
      title: `${t("title2")}`,
      content: `${t("text2")}`,
    },
    {
      id: 3,
      title: `${t("title3")}`,
      content: `${t("text3")}`,
    },
  ];
  return (
    <div className="mx-auto mt-[50px] flex max-w-6xl flex-col-reverse justify-between gap-6 px-4 md:mt-[100px] md:flex-row md:px-5">
      <Image
        src={SecondaryHomeImage}
        alt="Secondary image"
        className="flex h-full max-h-[414px] w-full items-start justify-center md:max-w-[280px] lg:w-full lg:max-w-[419px] lg:flex-grow-1"
      />
      <div className="flex max-w-[597px] flex-grow-2 flex-col">
        <h1 className="mb-6 text-center font-alt text-[32px] font-bold tracking-tight text-white md:mb-10 md:text-left">
          {t("whyDeepdive")}
        </h1>

        {whyChooseDeepdive.map((item) => (
          <DeepdiveProgram.Root
            key={item.id}
            className={item.id === whyChooseDeepdive.length ? "" : "mb-6"}
          >
            <DeepdiveProgram.Icon icon={Check} />
            <DeepdiveProgram.TextContainer>
              <DeepdiveProgram.Title>{item.title}</DeepdiveProgram.Title>
              <DeepdiveProgram.Content>{item.content}</DeepdiveProgram.Content>
            </DeepdiveProgram.TextContainer>
          </DeepdiveProgram.Root>
        ))}
      </div>
    </div>
  );
}
