import BackgroundLinesMobile from "@/assets/background/lines-mobile.svg";
import BackgroundLines from "@/assets/background/lines.svg";
import SmartphoneImage from "@/assets/images/smartphone.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Check } from "phosphor-react";
import { DeepdiveProgram } from "../DeepdiveProgram";

export function HomeOrangeCard() {
  const t = useTranslations("HomeOrangeCard");

  const jackieFunctions = [
    {
      id: 1,
      text: `${t("function1")}`,
    },
    {
      id: 2,
      text: `${t("function2")}`,
    },
    {
      id: 3,
      text: `${t("function3")}`,
    },
    {
      id: 4,
      text: `${t("function4")}`,
    },
    {
      id: 5,
      text: `${t("function5")}`,
    },
  ];
  return (
    <div className="h-[507px] w-full px-4 md:h-[236px] lg:h-[224px]">
      <div className="relative mx-auto flex h-fit min-h-[442px] w-full max-w-[1040px] -translate-y-[40%] flex-col items-end justify-evenly overflow-hidden rounded-[28px] bg-brand-orange px-4 md:-translate-y-1/2 md:flex-row">
        <Image
          src={BackgroundLines}
          alt="Lines background"
          className="inset-0 -z-0 hidden w-auto select-none bg-brand-orange bg-cover md:absolute md:flex md:h-full md:w-full"
        />
        <Image
          src={BackgroundLinesMobile}
          alt="Lines background"
          className="absolute bottom-0 -z-0 w-full select-none bg-cover md:hidden"
        />
        <div className="z-10 my-auto mb-6 mt-6 flex flex-col md:mt-10">
          <h1 className="mb-5 w-full max-w-[500px] font-alt text-[32px] font-bold leading-tight tracking-tight text-brand-primary-blue md:mb-8 md:text-[40px]">
            {t("technology")}
          </h1>
          <span className="mb-4 max-w-[527px] font-sans text-base font-normal text-brand-secondary-blue">
            {t("technologyText1")} <br />
            {t("technologyText2")}
          </span>

          {jackieFunctions.map((item) => (
            <DeepdiveProgram.Root className="mb-1" key={item.id}>
              <DeepdiveProgram.Icon
                icon={Check}
                className="h-6 w-6 text-white"
              />

              <DeepdiveProgram.Title className="font-normal text-brand-secondary-blue">
                {item.text}
              </DeepdiveProgram.Title>
            </DeepdiveProgram.Root>
          ))}
        </div>
        <Image
          src={SmartphoneImage}
          alt="Smartphone Deepdive"
          className="z-0 h-[309px] w-[193px] select-none self-center bg-cover md:h-[406px] md:w-[254px] md:self-end"
        />
      </div>
    </div>
  );
}
